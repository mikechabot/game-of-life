import { GRID_DATA } from '../common/app-const';

export default {
    initializeGrid() {
        const grid = [];
        for (let i=0; i < GRID_DATA.numRows; i++) {
            let cols = [];
            for (let j=0; j < GRID_DATA.numCols; j++) {
                cols.push({
                    row: i,
                    col: j,
                    alive: false
                });
            }
            grid.push(cols);
        }
        return grid;
    },
    getReconciledGrid(grid, refs) {
        _.forEach(refs, ref => {
            let cell = ref.props.cell;
            grid[cell.row][cell.col].alive = ref.state.alive
        });
        return grid;
    },
    getCellNeighbors(grid, cell) {
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
    },
    getLivingNeighbors(grid, cell) {
        return _.filter(
                this.getCellNeighbors(grid, cell),
                neighbor => neighbor && neighbor.alive );
    },
    getLivingNeighborCount(grid, cell) {
        return this.getLivingNeighbors(grid, cell).length;
    }
}
