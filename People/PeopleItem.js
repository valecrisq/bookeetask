import * as React from 'react';
import {Card} from "react-native-elements";
import {Text, TouchableOpacity, Image} from "react-native";
import peopleStyle from "./People.style";

export default class PeopleItem extends React.PureComponent {

    capitalizeText(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <Card id={Math.floor(Math.random() * 10)} style={peopleStyle.containerCard}>
                <Image
                    style={{alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 25}}
                    source={{uri: this.props.item.picture.thumbnail}}/>
                <Text style={peopleStyle.containerInfo}>{this.props.item.email}</Text>
                <Text style={peopleStyle.containerName}>
                    {this.capitalizeText(this.props.item.name.title) + ' ' + this.capitalizeText(this.props.item.name.first) + ' ' + this.capitalizeText(this.props.item.name.last)}</Text>
            </Card>
        )
    }
}

