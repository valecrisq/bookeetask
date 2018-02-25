import {StyleSheet} from 'react-native';

const peopleStyle = StyleSheet.create({
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
    }
});

export default peopleStyle;