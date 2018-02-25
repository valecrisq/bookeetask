import * as React from 'react';
import {FlatList, View} from 'react-native';
import PeopleItem from "./PeopleItem";

export default class PeopleList extends React.PureComponent {

    render() {

        const list =
            <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={(event) => this.props.onEndReached(event)}
                keyExtractor={(item, index) => index}
                data={this.props.items}
                renderItem={({item}) => <PeopleItem item={item} />}
            />;


        return(
            <View>{list}</View>
        )
    }
}