import React from 'react';
import {View} from 'react-native';
import ActionButton from "./ActionButton";

export default class ClearList extends React.PureComponent {

    render() {
        return (
            <View>
                <ActionButton
                    color={'blue'}
                    title={'Hide List'}
                    onPress={this.props.onPress}
                    icon= {{name:'arrow-expand-down'}}
                    />
            </View>
        )
    }
}
