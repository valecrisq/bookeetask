import * as React from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import PeopleItem from "./PeopleItem";

export default class PeopleList extends React.PureComponent {



    render() {

        const list =

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.refreshing}
                        onRefresh={(event) => this.props.onRefresh(event)}
                        colors={['red']}
                    />
                }
                onEndReachedThreshold={1}
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