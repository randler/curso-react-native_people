import React from 'react';
import {Image, Text, View, Button, StyleSheet} from 'react-native';


const ErrorComponent = props => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.error404}
                source={ require('../assets/img/error_404.png') } />
            <Text style={[styles.errorText, styles.errorHead]} >Oops!</Text>
            <Text style={styles.errorText} >Não consigo acessar o conteúdo</Text>
            <Button 
                title="Tentar novamente!"
                onPress={props.reload}
                style={styles.reloadButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    errorHead: {
        fontSize: 40,
        color: '#FF0000'
    },
    errorText: {
        fontSize: 20,
        marginBottom: 5,
        color: '#ff3d3d'
    },
    error404: {
        margin: 5,
        aspectRatio: 1,
    },
    reloadButton: {
        borderRadius: 10,
        color: '#007891'
    }
});


export default ErrorComponent;