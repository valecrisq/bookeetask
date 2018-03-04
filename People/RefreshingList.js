import React from 'react';
import {FlatList, View} from 'react-native';


export default class RefreshingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }


    render() {
        return (
            <div></div>
        )
    }
}