import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {
    render () {
        const { people } = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>
                <Image
                    style={styles.imageDriver}
                    source={{ uri: people.picture.large }} />
                <Image
                    style={styles.imagePlaces}
                    source={ require('../assets/img/places.png') } />
                <View style={styles.detailContainer}>
                    <Line label='Email: ' content={people.email} /> 
                    <Line label='Cidade: ' content={people.location.city} /> 
                    <Line label='Estado: ' content={people.location.state} />
                    <Line label='Tel: ' content={people.phone} />
                    <Line label='Cel: ' content={people.cell} />
                    <Line label='Nascionalidade: ' content={people.nat} />    
                    <Line label='Profissão: ' content={people.job} /> 
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    detailContainer: {
        marginTop: 10,
        borderRadius: 5,
        elevation: 1,
        backgroundColor: '#f2f2f2',
    },
    imageDriver: {
        aspectRatio: 1,
        borderRadius: 5,
    },
    imagePlaces : {
        marginTop: 10,
        width: '100%',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 5,
    },
})
