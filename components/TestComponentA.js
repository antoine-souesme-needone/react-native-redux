import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeName } from '../reducers/name/NameActions';


class TestComponentA extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Current Name: {this.props.name.currentName}</Text>
                <Button title="Set name to Thierry" onPress={this._setName} />
            </View>
        )
    }

    _setName = () => {
        console.log('===> setting name to Thierry ..');
        this.props.changeName('Thierry', 'From component A');
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

export default connect(mapStateToProps, mapDispatchToProps)(TestComponentA);
