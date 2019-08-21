import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import List from './ListComponent';

const Main = StackNavigator({
    List: {
        screen: List,
    },
    initialRouteName: 'List',
});

class MainComponent extends Component {
    render() {
        return (
            <Main />
        );
    }
}

export default MainComponent;