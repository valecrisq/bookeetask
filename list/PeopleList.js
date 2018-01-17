import React from 'react';
import {Text, FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import EmptyList from './buttons/EmptyList';
import LoadMoreItems from './buttons/LoadMoreItems';



export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            start: 0,
        };
        this.emptyList = this.emptyList.bind(this);
        this.loadList = this.loadList.bind(this);
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

        const list =
            <FlatList
                onEndReachedThreshold={1}
                onEndReached={(event) => this.loadList(event)}
                keyExtractor={(item, index) => index}
                data={this.state.items}
                renderItem={({item}) => (
                    <Card id={Math.floor(Math.random()* 10)} style={styles.containerCard}>
                        <Text style={styles.containerEmail}>{item.email}</Text>
                        <Text style={styles.containerId}>Id: {item.id}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                alert(item.name);
                            }}>
                            <Text style={styles.containerName}>Show Name</Text>
                        </TouchableOpacity>
                    </Card>
                )}
            />;



        return (
            <View style={styles.container}>
                <LoadMoreItems style={styles.loadButton}
                    onPress={this.loadList}
                />
                {
                    this.state.items.length > 0 &&
                    <EmptyList
                        onPress={this.emptyList}
                    />
                }
                {list}
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        paddingTop: 30,
    },
    containerCard: {
        marginTop: 20,
        marginBottom: 20,
    },
    containerName: {
        alignSelf: 'flex-end',
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        padding: 5,
    },
    containerEmail: {
        fontFamily: 'serif',
        fontSize: 18,
    },
    containerId: {
        fontFamily: 'serif',
        fontSize: 14,
    },
    loadButton: {

    },
});
