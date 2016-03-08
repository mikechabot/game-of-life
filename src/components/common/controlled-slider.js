import React from 'react';
import Slider from 'material-ui/lib/slider';
import Colors from 'material-ui/lib/styles/colors';

/**          Author: Mike Chabot
 *      Description: Simple controlled slider
 *  Default Element: See render()
 *            Props: See PropTypes
 */
class ControlledSlider extends React.Component {
    render() {
        return (
            <div>
                <div style={style.header}>
                    <div style={style.title}>{this.props.title}</div>
                    <div style={style.subtitle}>{this.props.subtitle}</div>
                </div>
                <Slider
                    disabled={this.props.disabled}
                    style={style.slider}
                    ref="slider"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    onDragStop={() => this.props.onChange(
                        this.refs.slider.state.value
                    )}
                />
            </div>
        );
    }
}

const style = {
    slider: {
        margin: 5
    },
    header: {
        color: Colors.grey600,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 5px 0 5px'
    },
    title: {
        fontSize: '120%'
    },
    subtitle: {
      fontSize: '85%'
    }
}

ControlledSlider.propTypes = {
    value: React.PropTypes.number.isRequired,
    title: React.PropTypes.string,
    subtite: React.PropTypes.string,
    onChange: React.PropTypes.func
};

export default ControlledSlider;
