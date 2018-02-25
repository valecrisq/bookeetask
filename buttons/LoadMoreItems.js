import React from 'react';
import {View} from 'react-native';
import ActionButton from "./ActionButton";

export default class EmptyList extends React.PureComponent {

    render() {
        return (
            <View>
                <ActionButton
                    color={'red'}
                    title={'Load Items'}
                    onPress={this.props.onPress} />
            </View>
        )
    }
}
