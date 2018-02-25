import React from 'react';
import {View} from 'react-native';
import PeopleContainer from "./People/PeopleContainer";
import {StatusBar} from 'react-native';



export default class App extends React.Component {
    render() {
        return (
            <View style={{marginTop: StatusBar.currentHeight}}>
                <PeopleContainer />
            </View>
        );
    }
}
