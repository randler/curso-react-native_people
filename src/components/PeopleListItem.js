import React from 'react';

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {capitalizeFirstLetter} from '../util/';

const PeopleListItem = props => {  
    const { people } = props; 
    const { first, last } = people.name
    return (
        <TouchableOpacity onPress={ () => {
            console.log('clicou: ', first)
            } 
        } >
            <View style={styles.line}>
                <Image style={styles.imageLine} source={require('../assets/img/front_1.png')} />
                <View style={styles.info}>
                    <View style={styles.infoLine}>
                        <Text style={styles.textLine}>
                            { `${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}` }
                        </Text>
                        <Text style={styles.textDownLine}>{ people.cell }</Text>
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
        </TouchableOpacity>
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
        flex: 5
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
      aspectRatio: 1,
      /*width: 90,
      height: 90,*/
      borderRadius: 5,
      flex: 1,
    }
});

export default PeopleListItem;