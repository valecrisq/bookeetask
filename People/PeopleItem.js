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
            <Card id={Math.floor(Math.random() * 10)} style={peopleStyle.containerCard}>

                <View style={peopleStyle.containerContact}>

                    <Image
                        style={{alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 25}}
                        source={{uri: this.props.item.picture.thumbnail}}/>

                        <Text style={peopleStyle.containerName}>
                            {this.capitalizeText(this.props.item.name.title) +
                            ' ' + this.capitalizeText(this.props.item.name.first) +
                            ' ' + this.capitalizeText(this.props.item.name.last)}
                        </Text>

                        <Text style={peopleStyle.containerInfo}>
                            {'Date of Birth: ' + (this.props.item.dob.split(" ").slice(0))}
                        </Text>

                        <Text style={peopleStyle.containerInfo}>
                            {(this.props.item.location.street) +
                            ', ' + this.capitalizeText(this.props.item.location.city) +
                            ', ' + this.capitalizeText(this.props.item.location.state)}
                        </Text>

                </View>

            </Card>
        )
    }
}