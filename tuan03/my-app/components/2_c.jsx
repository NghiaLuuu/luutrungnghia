import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Bai2c() {
    const [isLowerCase, setLowerCase] = useState(false);
    const [isUpperCase, setUpperCase] = useState(false);
    const [isNumber, setNumber] = useState(false);
    const [isSpecialSymbol, setSpecialSymbol] = useState(false);
    const [password, setPassword] = useState('');
    const handleGeneratePassword = () => {
        console.log('Password generation logic goes here');
    };

    return (
        <View style={styles.container}>
            <View style={styles.view2}>
                <View>
                    <Text style={styles.header_1}>PASSWORD</Text>
                    <Text style={styles.header_2}>Generator</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter your password" 
                        placeholderTextColor="white" 
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                </View>
                <View style={styles.flexBody}>
                    <Text style={styles.textBody}>Password length</Text>
                    <Text style={styles.textOutput}>{password.length}</Text>
                </View>
                
                <View style={styles.flexBody}>
                    <Text style={styles.textBody}>Include lower case letters</Text>
                    <TouchableOpacity onPress={() => setLowerCase(!isLowerCase)}>
                        <View style={[styles.checkbox]}>
                            {isLowerCase && <Text style={styles.checkMark}>✓</Text>}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.flexBody}>
                    <Text style={styles.textBody}>Include upper case letters</Text>
                    <TouchableOpacity onPress={() => setUpperCase(!isUpperCase)}>
                        <View style={[styles.checkbox]}>
                            {isUpperCase && <Text style={styles.checkMark}>✓</Text>}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.flexBody}>
                    <Text style={styles.textBody}>Include number</Text>
                    <TouchableOpacity onPress={() => setNumber(!isNumber)}>
                        <View style={[styles.checkbox]}>
                            {isNumber && <Text style={styles.checkMark}>✓</Text>}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.flexBody}>
                    <Text style={styles.textBody}>Include special symbol</Text>
                    <TouchableOpacity onPress={() => setSpecialSymbol(!isSpecialSymbol)}>
                        <View style={[styles.checkbox, isSpecialSymbol && styles.checked]}>
                            {isSpecialSymbol && <Text style={styles.checkMark}>✓</Text>}
                        </View>
                    </TouchableOpacity>
                </View>

                <Button title='GENERATE PASSWORD' onPress={handleGeneratePassword} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9370DB', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    view2: {
        backgroundColor: '#4B0082', 
        width: 350, 
        height: 550,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 4,
    },
    header_1: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    header_2: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    inputContainer: {
        width: '100%', 
        alignItems: 'center', 
        marginTop: 20, 
    },
    input: {
        width: 330,
        height: 40, 
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5, 
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
    },
    textOutput: {
        width: 120,
        height: 25,
        backgroundColor: 'white',
    },
    flexBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        padding: 10,
    },
    textBody: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        backgroundColor:'white',
        alignItems: 'center',
    },
    checkMark: {
        color: 'black',
        fontSize: 16,
    },
});
