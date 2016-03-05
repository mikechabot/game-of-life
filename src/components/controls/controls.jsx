import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Slider from 'material-ui/lib/slider';

/**          Author: Mike Chabot
 *      Description: GoL control panel
 *  Default Element: See render()
 *            Props: See PropTypes
 */
class Controls extends React.Component {
    render() {
        return (
            <Card style={style.container}>
                <CardText>
                    <TextField
                        floatingLabelText="Rows"
                        style={style.input}
                        value={this.props.controls.numRows}
                        errorText={this.props.controls.numRows > 300 ? 'Max rows: 300' : ''}
                        onChange={(event) => this.props.setRows(event.target.value)}
                    />
                    <TextField
                        floatingLabelText="Columns"
                        style={style.input}
                        value={this.props.controls.numCols}
                        errorText={this.props.controls.numCols > 300 ? 'Max columns: 300' : ''}
                        onChange={(event) => this.props.setColumns(event.target.value)}
                    />
                </CardText>
                <CardText>
                    <div style={style.slider}>
                        <Slider
                            style={{margin: 0}}
                            ref={'tpsSlider'}
                            min={1}
                            max={20}
                            value={this.props.controls.tps}
                            description={`${this.props.controls.tps} ${this.props.controls.tps === 1 ? 'tick' : 'ticks'}/sec`}
                            onChange={() => this.props.setTicksPerSecond(
                                this.refs.tpsSlider.getValue()
                            )}
                        />
                    </div>
                </CardText>
                <CardActions>
                    <RaisedButton
                        style={style.button}
                        label={this.props.controls.mutate ? 'Stop' : 'Start'}
                        onClick={this.props.controls.mutate ? () => this.props.stopMutation() : () => this.props.startMutation() } />
                    <RaisedButton
                        style={style.button}
                        label='Build Grid'
                        onClick={() => this.props.buildGrid()} />
                </CardActions>
            </Card>
        );
    }
}

const style = {
    container: {
        display: 'flex'
    }
}

Controls.propTypes = {};

export default Controls;