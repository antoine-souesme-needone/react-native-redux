import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeName } from '../reducers/name/NameActions';


class TestComponentB extends React.Component {
    render() {
        return (
            <Button title="Set name to Nicolas" onPress={this._setName} />
        )
    }

    _setName = () => {
        console.log('===> setting name to Nicolas ..');
        this.props.changeName('Nicolas', 'From component B');
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeName
    }, dispatch)
);

const mapStateToProps = (state) => {
    const { name } = state
    return { name }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponentB);
