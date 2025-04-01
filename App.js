import React from "react"; 
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"; 

export default function App(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>No que você é grato hoje?</Text>
            <TextInput style={styles.input}placeholder="Escreve algo pelo qual é grato..." />
            <Button title="Compartilhar Inspiração" style={styles.button} />
            <TouchableOpacity style={styles.button} onPress={() => console.log('Enviar mensagem')}>
              <Text style={styles.buttonText}>SALVAR MOMENTO</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FCFFC1",
    },
    title: {
        fontSize: 30,
        color: "#FB9EC6",
    },
    button: {
        backgroundColor: "#FB9EC6",
        borderRadius: 2,
        width: 210,
        marginTop: 10,
        padding: 5,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: 50,
        fontSize: 15,
        color: "grey",
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 10,
    },
});