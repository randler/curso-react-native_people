import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const { peoples } = props;
    const items = peoples.map(people => {
        return <PeopleListItem key={people.name.first} people={people} />

    });

    return (
    <View style={styles.container}>
        <ScrollView>
            { items }
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007891',
    }
});

export default PeopleList;