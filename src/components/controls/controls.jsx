import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Slider from 'material-ui/lib/slider';
import ControlledSlider from '../common/controlled-slider';

/**          Author: Mike Chabot
 *      Description: GoL control panel
 *  Default Element: See render()
 *            Props: See PropTypes
 */

const Controls = ({
    controls,
    startMutation,
    stopMutation,
    setTicksPerSecond,
    clearGrid
}) => (
    <div>
        <div style={style.container}>
            <div style={style.slider}>
                <ControlledSlider
                    min={1}
                    max={20}
                    title="Speed"
                    subtitle={`${controls.tps} ticks/sec`}
                    onChange={setTicksPerSecond}
                    value={controls.tps}
                />
            </div>
            <div style={style.buttons}>
                <RaisedButton
                    labelStyle={style.button}
                    label={controls.mutate ? 'Stop' : 'Start'}
                    onClick={
                        controls.mutate
                            ? () => stopMutation()
                            : () => startMutation()
                    }
                />
                <RaisedButton
                    labelStyle={style.button}
                    label='Clear Grid'
                    onClick={() => clearGrid()}
                />
            </div>
        </div>
    </div>
);

const style = {
    container: {
        width: 400,
        display: 'flex',
        flexDirection: 'column'
    },
    buttons: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-around'
    },
    button: {
        textTransform: 'none'
    }
}

Controls.propTypes = {
    controls: React.PropTypes.object,
    startMutation: React.PropTypes.func,
    stopMutation: React.PropTypes.func,
    setTicksPerSecond: React.PropTypes.func,
    buildGrid: React.PropTypes.func
};

export default Controls;