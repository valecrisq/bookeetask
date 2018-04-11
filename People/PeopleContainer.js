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
            page: 1,
            refreshing: false
        };

    }

    componentDidMount() {
        this.loadList();
    }

    loadList() {
        fetch('https://randomuser.me/api/?results=10&page=' + this.state.page)
            .then((response) => response.json())
            .then((responsejson) => {
                this.setState({
                    items: this.state.items.concat(responsejson.results),
                    page: this.state.page + 1,
                });
            });
    }


    emptyList() {
        this.setState({
            items: [],
            page: 1
        });
    }

    refreshList() {
        this.setState({
            refreshing: true,
            items: [],
            page: 1
        });
        this.loadList()
            .then(() => {
                this.setState({
                    refreshing: false
                })
            })
    }


    render() {
        return (
            <View style={peopleStyle.container}>

                <LoadMoreItems onPress={() => this.loadList()}/>
                {
                    this.state.items.length > 1 &&
                    <ClearList onPress={() => this.emptyList()}/>
                }

                <PeopleList
                    onRefresh={() => this.refreshList()}
                    refreshing={this.state.refreshing}
                    onEndReached={() => this.loadList()}
                    items={this.state.items}
                />
            </View>
        );
    }
}