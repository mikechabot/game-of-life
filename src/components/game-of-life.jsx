import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Cell from './cell';
import _ from 'lodash';

/**      Author: Mike Chabot
 *  Description: GameOfLife application
 */
class GameOfLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numRows: 25,
            numCols: 25,
            rows: [],
            mutate: false
        }
        this.max = 300;
    }

    handleTableChange = (event, stateKey) => {
        const value = event.target.value;
        if (value <= this.max) {
            this.setState({
                [stateKey]: event.target.value
            });
        } else {
            this.setState({
                error: `Too large. Max: ${this.max}`
            })
        }
    };

    buildRows() {
        const rows = [];
        for (let i=0; i < this.state.numRows; i++) {
            let cols = [];
            for (let j=0; j < this.state.numCols; j++) {
                cols.push({row: i, col: j, alive: false});
            }
            rows.push(cols);
        }
        return rows;
    }

    toggleMutate() {
        this.setState({
            mutate: !this.state.mutate
        });
    }

    getNeighbors(rows, cell) {
        return [
            rows[cell.row-1] && rows[cell.row-1][cell.col],     // North
            rows[cell.row-1] && rows[cell.row-1][cell.col+1],   // Northeast
            rows[cell.row][cell.col+1],                         // East
            rows[cell.row+1] && rows[cell.row+1][cell.col+1],   // Southeast
            rows[cell.row+1] && rows[cell.row+1][cell.col],     // South
            rows[cell.row+1] && rows[cell.row+1][cell.col-1],   // Southwest
            rows[cell.row][cell.col-1],                         // West
            rows[cell.row-1] && rows[cell.row-1][cell.col-1]    // Northwest
        ]
    }

    render() {
        const rows = this.buildRows();
        return (
            <div style={style.container}>
                <div>
                    <h1>Game of Life</h1>
                </div>
                <div style={style.controls}>
                    <div>
                        <TextField
                            floatingLabelText={`Rows (max: ${this.max})`}
                            value={this.state.numRows}
                            onChange={(e) => this.handleTableChange(e, 'numRows')}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText={`Columns (max: ${this.max})`}
                            value={this.state.numCols}
                            onChange={(e) => this.handleTableChange(e, 'numCols')}
                        />
                    </div>
                    <div>
                        <RaisedButton label={this.state.mutate ? 'Stop' : 'Start'} onClick={() => this.toggleMutate()} />
                    </div>
                </div>
                <div style={style.game}>
                    <table className="table">
                        <tbody>
                            {
                                rows.map((rowCols, index) => (
                                    <tr key={index}>
                                        {
                                            rowCols.map((cell, index) => (
                                                <Cell
                                                    mutate={this.state.mutate}
                                                    neighbors={this.getNeighbors(rows, cell)}
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
            </div>

        );
    }
}

const style ={
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    active: {
        backgroundColor: 'red'
    },
    controls: {
        display: 'flex',
        marginBottom: 20
    },
    game: {
        display: 'flex'
    }
}

GameOfLife.propTypes = {};

export default GameOfLife;