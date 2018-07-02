import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

import {capitalizeFirstLetter} from '../util/';

const PeopleListItem = props => {  
    const { people } = props; 
    const { first, last } = people.name
    const { cell, picture } = people
    return (
        <View style={styles.line}>
            <Image style={styles.imageLine} source={{uri: picture.medium}} />
            <View style={styles.info}>
                <View style={styles.infoLine}>
                    <Text style={styles.textLine}>
                        { `${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}` }
                    </Text>
                    <Text style={styles.textDownLine}>{ cell }</Text>
                    <Text style={styles.textLine}>Dias</Text>
                    <Text style={styles.textDownLine}>S, T, Q, Q, S, S</Text>
                </View>
                <View style={styles.infoLine}>
                    <Text style={styles.textLine}>Para VCA</Text>
                    <Text style={styles.textDownLine}>07:00</Text>
                    <Text style={styles.textLine}>Para CS</Text>
                    <Text style={styles.textDownLine}>09:00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 100,
        paddingLeft: 10,
        paddingTop: 5,
        marginHorizontal: 10,
        marginVertical: 4,
        borderRadius: 4,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    infoLine : {
        marginLeft: 10,
    },
    textLine: {
        color: '#214951',
        fontSize: 13,
        fontWeight: 'bold',
    },
    textDownLine: {
        fontSize: 12,
        color: '#264e56'
    },
    imageLine: {
      width: 90,
      height: 90,
      borderRadius: 5,
    }
});

export default PeopleListItem;