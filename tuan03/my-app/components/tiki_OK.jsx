import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Imageicon from '@/assets/images/book.jpg'; 

export default function TiKIOK() {
    return (
        <View style={styles.container}>
            <Image source={Imageicon} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>                
                <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>
                <Text style={styles.text2}>141.800 đ</Text>
                <Text style={styles.text3}>141.800</Text>
                <View style={styles.buttonContainer}>
                    <Button title="-" onPress={() => {}} color="gray" />    
                    <Text style={styles.quantity}>0</Text>
                    <Button title="+" onPress={() => {}} color="gray"/>
                    <Text style={styles.buy}>Mua sau</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        padding: 10,
    },
    image: {
        width: 100,
        height: 130,
        marginRight: 10, 
    },
    textContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
    },
    text1: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    text3: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'line-through',
    },
    buttonContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 10,
    },
    quantity: {
        marginHorizontal: 10, 
        fontSize: 18,
        fontWeight: 'bold',
    },
    buy: {
        color: 'blue',
        fontWeight:'bold',
        marginLeft:100
    }
});
