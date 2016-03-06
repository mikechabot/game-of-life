import React from 'react';
import Cell from './cell';
import Colors from 'material-ui/lib/styles/colors';

/**          Author: Mike Chabot
 *      Description:
 *  Default Element: See render()
 *            Props: See PropTypes
 */

let timer;

class GameOfLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            numRows: this.props.controls.numRows,
            numCols: this.props.controls.numCols,
            tps: this.props.controls.tps,
        }
    }

    componentDidMount() {
        this.setState({
            grid: this.buildGrid(
                this.state.numRows,
                this.state.numCols
            )
        });
    }

    shouldComponentUpdate(nextProps) {
        return !nextProps.controls.buildGrid;
    }

    componentWillReceiveProps(nextProps, nextState) {

        // Update ticks per second
        if (nextProps.controls.tps !== this.state.tps) {
            this.setState({tps: nextProps.controls.tps})
        }

        // Update mutate flag
        if (nextProps.controls.mutate) {
            timer = setInterval(() => {
                this.forceUpdate();
                this.ticks++;
            }, (1000 / this.state.tps))
        } else {
            clearInterval(timer);
        }
    }

    buildGrid(rows, cols) {
        const numRows = rows || this.state.numRows;
        const numCols = cols || this.state.numCols;
        const grid = [];
        for (let i=0; i < numRows; i++) {
            let cols = [];
            for (let j=0; j < numCols; j++) {
                cols.push({row: i, col: j, alive: false});
            }
            grid.push(cols);
        }
        return grid;
    }

    getReconciledGrid() {
        const grid = this.state.grid;
        _.forEach(this.refs, ref => {
            let cell = ref.props.cell;
            grid[cell.row][cell.col].alive = ref.state.alive
        });
        return grid;
    }

    getNeighbors(cell, grid) {
        return [
            grid[cell.row-1] && grid[cell.row-1][cell.col],     // North
            grid[cell.row-1] && grid[cell.row-1][cell.col+1],   // Northeast
            grid[cell.row][cell.col+1],                         // East
            grid[cell.row+1] && grid[cell.row+1][cell.col+1],   // Southeast
            grid[cell.row+1] && grid[cell.row+1][cell.col],     // South
            grid[cell.row+1] && grid[cell.row+1][cell.col-1],   // Southwest
            grid[cell.row][cell.col-1],                         // West
            grid[cell.row-1] && grid[cell.row-1][cell.col-1]    // Northwest
        ]
    }

    render() {
        const grid = this.getReconciledGrid();
        return (
            <div style={style.container}>
                Ticks: {
                    this.props.timer
                        ? this.props.timer.ticks
                        : 0
                }
            </div>
        );
    }
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    ticks: {
        fontSize: '90%',
        fontWeight: 600,
        color: Colors.grey600
    }
}

GameOfLife.propTypes = {};

export default GameOfLife;