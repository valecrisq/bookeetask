import * as React from 'react';
import {Card} from "react-native-elements";
import {Text, TouchableOpacity, Image} from "react-native";
import peopleStyle from "./People.style";

export default class PeopleItem extends React.PureComponent {
    render() {

        return (
            <Card id={Math.floor(Math.random() * 10)} style={
                {
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    display: 'flex',
                    alignContent: 'flex-start'
                }
            }>
                <Image
                    style={{alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 25}}
                    source={{uri: this.props.item.picture.thumbnail}}/>
                <Text style={peopleStyle.containerEmail}>{this.props.item.email}</Text>
            </Card>
        )
    }
}