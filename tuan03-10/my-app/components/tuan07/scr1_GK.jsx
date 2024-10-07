import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Scr1GK() {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>MANAGE YOUR</Text>
                <Text style={styles.headerText}>Task</Text>
            </View>
            <View>
                <TextInput 
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Scr2Create', { name })}>
                    <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 16,
    },
    buttonContainer: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
