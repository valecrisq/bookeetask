import {StyleSheet} from 'react-native';

const peopleStyle = StyleSheet.create({
    containerCard: {
        display: 'flex',
    },
    containerContact: {
        display: 'flex',

    },
    containerName: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
    },
    containerInfo: {
        fontFamily: 'serif',
        fontSize: 11,
        alignSelf: 'flex-end'
    },
});

export default peopleStyle;