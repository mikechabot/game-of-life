import React from 'react';
import Cell from './cell';

/**          Author: Mike Chabot
 *      Description:
 *  Default Element: See render()
 *            Props: See PropTypes
 */
class GameOfLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            numRows: this.props.controls.numRows,
            numCols: this.props.controls.numCols
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

    shouldComponentUpdate(nextProps, nextState) {
        // Don't render if numRows or numCols changes
        // Instead we'll render if we're issued a build action
        if (nextProps.controls.numRows !== this.props.controls.numRows
            || nextProps.controls.numCols !== this.props.controls.numCols) {
            return false;
        }
        return true;
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.controls.buildGrid === true) {
            this.setState({
                numRows: nextProps.controls.numRows,
                numCols: nextProps.controls.numCols,
                grid: this.buildGrid(
                    nextProps.controls.numRows,
                    nextProps.controls.numCols
                )
            });
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

    getNeighbors(cell) {
        const grid = this.state.grid;
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
        return (
            <div style={style.container}>
                <table className="table">
                    <tbody>
                        {
                            this.state.grid.map((rowColumns, index) => (
                                <tr key={index}>
                                    {
                                        rowColumns.map((cell, index) => (
                                            <Cell
                                                ref={`${cell.row}-${cell.col}`}
                                                mutate={this.props.controls.mutate}
                                                neighbors={this.getNeighbors(cell)}
                                                key={index}
                                                cell={cell} />
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const style = {
    container: {
        display: 'flex',
        marginTop: 20
    }
}

GameOfLife.propTypes = {};

export default GameOfLife;