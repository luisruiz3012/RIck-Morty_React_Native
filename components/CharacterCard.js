import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CharacterCard = ({character}) => {
    return (
        <View style={styles.cardContainer}>
            <Image 
                source={{uri: character.image}}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <View style={styles.status}>
                    <Text style={styles.name}>{character.name}</Text>
                    <Text style={[ character.status == 'Alive' ? styles.alive : styles.dead]}>{character.status}</Text>
                </View>
                <Text style={styles.title}>Current Dimension: </Text>
                <Text style={styles.details}>{character.location.name}</Text>
                <Text style={styles.title}>Origin Dimension: </Text>
                <Text style={styles.details}>{character.origin.name}</Text>
            </View>
        </View>
    )
}

export default CharacterCard

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%',
        margin: 10,
        marginBottom: 25,
        borderTopLeftRadius: 25
    },
    infoContainer: {
        backgroundColor: 'rgba(162, 162, 161, 0.58)',
        padding: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 35,
    },
    name: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        width: '70%',
    },
    title: {
        fontSize: 16,
        color: 'rgba(205, 205, 205, 1)',
        marginBottom: 2,
    },
    details: {
        fontSize: 18,
        color: 'white',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 250,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    status: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    alive: {
        color: '#04ff00',
        fontWeight: 'bold',
        fontSize: 20,
    },
    dead: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
