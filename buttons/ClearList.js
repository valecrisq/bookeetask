import React from 'react';
import {View} from 'react-native';
import ActionButton from "./ActionButton";
import {Icon} from 'react-native-elements';

export default class ClearList extends React.PureComponent {

    render() {
        return (
            <View>
                <ActionButton
                    color={'blue'}
                    title={'Hide List'}
                    onPress={this.props.onPress}
                    icon={
                        <Icon
                            name={'arrow-expand-down'}
                            color={'white'} /> }
                    />
            </View>
        )
    }
}
