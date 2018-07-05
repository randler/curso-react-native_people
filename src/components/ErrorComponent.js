import React from 'react';
import {Image, Text, View, Button, StyleSheet} from 'react-native';


const ErrorComponent = props => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.error404}
                source={ require('../assets/img/error_404.png') } />
            <Text style={styles.errorText} >Erro ao tentar acessar conteúdo</Text>
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
    errorText: {
        fontSize: 20,
        marginBottom: 5,
        color: '#007891'
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