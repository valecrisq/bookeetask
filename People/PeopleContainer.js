import React from 'react';
import {View} from 'react-native';
import LoadMoreItems from '../buttons/LoadMoreItems';
import peopleStyle from "./People.style";
import PeopleList from "./PeopleList";
import ClearList from "../buttons/ClearList";


export default class PeopleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            start: 0,
        };

    }

    componentDidMount() {
        this.loadList();
    }

    loadList() {
        fetch('https://jsonplaceholder.typicode.com/users?_start=' + this.state.start)
            .then((response) => response.json())
            .then((responsejson) => {
                this.setState({
                    items: this.state.items.concat(responsejson),
                    start: this.state.start + 10,
                });
            });
    }


    emptyList() {
        this.setState({
            items: [],
            start: 0,
        });
    }


    render() {
        return (
            <View style={peopleStyle.container}>

                <LoadMoreItems onPress={() => this.loadList()}/>
                {
                    this.state.items.length > 0 &&
                    <ClearList onPress={() => this.emptyList()}/>
                }

                <PeopleList onEndReached={() => this.loadList()} items={this.state.items}/>

            </View>
        );
    }
}