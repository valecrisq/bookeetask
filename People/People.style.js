import {StyleSheet} from 'react-native';

const peopleStyle = StyleSheet.create({
    containerCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerContact: {
        display: 'flex',
        flexDirection: 'column',
        height: 100,
        flexGrow: 1
    },
    containerName: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        flexGrow: 1
    },
    containerInfo: {
        fontFamily: 'serif',
        fontSize: 11,
        alignSelf: 'flex-end'
    },
});

export default peopleStyle;