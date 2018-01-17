import React from 'react';
import {Button, View} from 'react-native';

export default class LoadMoreItems extends React.Component {

    render() {

        const load =
            <Button
                onPress={this.props.onPress}
                title='Load List'
                color='#B20000'
            >
                Load List!
            </Button>;


        return (
            <View>
                {load}
            </View>
        )
    }
}
