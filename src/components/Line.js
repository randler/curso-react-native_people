import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Line = ({label = '', content = '-'}) => {
    return (
        <View style={styles.line}>
            <Text style={[
                styles.cell, 
                styles.label,
                label.length > 8 ? styles.longLabel : {}
                ]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingVertical: 3,
        borderColor: '#000'
    },
    content: {
        flex: 4,
    },
    cell: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
    },
    longLabel: {
        fontSize: 10,
    }
});


export default Line;