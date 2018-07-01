import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 

const Header = (props) => (
    <View style={styles.header}>
        <Text style={styles.titleHeader}>{ props.title }</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 24,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleHeader: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
    }
    
});

export default Header;