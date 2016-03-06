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
            <div style={style.container}>
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
                <div style={style.buttons}>
                    <RaisedButton
                        style={style.button}
                        label={this.props.controls.mutate ? 'Stop' : 'Start'}
                        onClick={this.props.controls.mutate ? () => this.props.stopMutation() : () => this.props.startMutation() } />
                    <RaisedButton
                        style={style.button}
                        label='Build Grid'
                        onClick={() => this.props.buildGrid()} />
                </div>
            </div>
        );
    }
}

const style = {
    container: {
        border: '1px solid red',
        width: 400,
        display: 'flex',
        flexDirection: 'column'
    },
    slider: {
        fontSize: '90%',
        fontWeight: 500
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}

Controls.propTypes = {};

export default Controls;