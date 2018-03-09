import React from 'react';
import {View} from 'react-native';
import ActionButton from "./ActionButton";

export default class EmptyList extends React.PureComponent {

    render() {
        return (
            <View>
                <ActionButton
                    color={'red'}
                    title={'Show Friends'}
                    onPress={this.props.onPress} />
            </View>
        )
    }
}
