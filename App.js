import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import TestComponentA from './components/TestComponentA';
import TestComponentB from './components/TestComponentB';
import AppReducer from './reducers/AppReducer';


const reducer = createStore(AppReducer, applyMiddleware(thunk));


export default class App extends React.Component {
    render() {
        return (
            <Provider store={reducer}>
                <View style={styles.container}>
                    <TestComponentA />
                    <TestComponentB />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
