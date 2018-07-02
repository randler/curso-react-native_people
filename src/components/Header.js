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
        backgroundColor: '#00667a',
        borderColor: '#00667a',
        borderBottomColor: '#00809b',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    titleHeader: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
    }
    
});

export default Header;