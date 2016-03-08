import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import { connect } from 'react-redux';

const Ticks = ({
    ticks
}) => {
    return (
        <span style={style}>
            Ticks: {ticks}
        </span>
    );
}

const style = {
    fontSize: '90%',
    fontWeight: 600,
    color: Colors.grey600
}

Ticks.propTypes = {
    ticks: React.PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        ticks: state.timer.ticks
    }
}

export default connect(mapStateToProps)(Ticks);
