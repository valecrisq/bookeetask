import * as React from 'react';
import {Card} from "react-native-elements";
import {Text, Image, View} from "react-native";
import peopleStyle from "./People.style";

export default class PeopleItem extends React.PureComponent {

    capitalizeText(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    

    render() {
        return (
            <Card>
                <View style={peopleStyle.containerCard}>
                    <Image
                        style={{alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 25}}
                        source={{uri: this.props.item.picture.thumbnail}}/>

                    <View style={peopleStyle.containerContact}>

                        <Text style={peopleStyle.containerName}>
                            {this.capitalizeText(this.props.item.name.title) +
                            ' ' + this.capitalizeText(this.props.item.name.first) +
                            ' ' + this.capitalizeText(this.props.item.name.last)}
                        </Text>

                        <Text style={peopleStyle.containerInfo}>
                            {'Date of Birth: ' + (this.props.item.dob.split(" ")[0])}
                        </Text>

                        <Text style={peopleStyle.containerInfo}>
                            {(this.props.item.location.street) +
                            ', ' + this.capitalizeText(this.props.item.location.city) +
                            ', ' + this.capitalizeText(this.props.item.location.state)}
                        </Text>
                    </View>
                </View>
            </Card>
        )
    }
}