import * as React from 'react';
import {View, Button} from "react-native";

export default class ActionButton extends React.PureComponent {
    render() {
        return (
            <View>
                <Button {...this.props} />
            </View>
        )
    }
}