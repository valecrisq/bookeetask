import React from 'react';
import {Button, View} from 'react-native';

export default class EmptyList extends React.Component {

    render() {

        const empty =
            <Button
                onPress={this.props.onPress}
                title='Empty List'
                color='blue'
            >
                Empty List!
            </Button>;


        return (
            <View>
                {empty}
            </View>
        )
    }
}
