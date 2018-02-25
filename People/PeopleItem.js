import * as React from 'react';
import {Card} from "react-native-elements";
import {Text, TouchableOpacity} from "react-native";
import peopleStyle from "./People.style";

export default class PeopleItem extends React.PureComponent {
    render() {

        return <Card id={Math.floor(Math.random() * 10)} style={peopleStyle.containerCard}>
            <Text style={peopleStyle.containerEmail}>{this.props.item.email}</Text>
            <Text style={peopleStyle.containerId}>Id: {this.props.item.id}</Text>
            <TouchableOpacity
                style={peopleStyle.containerName}
                onPress={() => {
                    alert(this.props.item.name);
                }}>
                <Text>Show Name</Text>
            </TouchableOpacity>
        </Card>
    }
}