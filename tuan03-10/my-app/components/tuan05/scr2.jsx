import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Imageicon from '@/assets/images/vs_red.png';
import { useNavigation } from '@react-navigation/native';

export default function Scr2() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={Imageicon} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text>Điện Thoại Vsmart Joy 3</Text>
                    <Text>Hàng chính hãng</Text>
                </View>
            </View>
            <View style={styles.chooseColor}>
                <Text style={styles.text}>Chọn một màu bên dưới: </Text>
                <View style={styles.colorColumn}>
                    <TouchableOpacity style={[styles.colorBox, { backgroundColor: 'skyblue' }]} onPress={() => alert('Bạn đã chọn màu 1')}>
                        <Text style={styles.number}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.colorBox, { backgroundColor: 'red' }]} onPress={() => navigation.navigate('Scr3') }>
                        <Text style={styles.number}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.colorBox, { backgroundColor: 'black' }]} onPress={() => alert('Bạn đã chọn màu 3')}>
                        <Text style={styles.number}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.colorBox, { backgroundColor: 'blue' }]} onPress={() => alert('Bạn đã chọn màu 4')}>
                        <Text style={styles.number}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonXong}>
                        <Text style={styles.textButtonXong}>XONG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        flex:1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%', 
    },
    image: {
        width: 150,
        height: 150,
    },
    textContainer: {
        paddingLeft: 10,  
        marginRight:50,
    },
    chooseColor: {
        backgroundColor: 'gray',
        flex:1,
        width:'105%',
        textAlign:'center',
        alignItems:'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    colorColumn: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
    },
    colorBox: {
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
    },
    number: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonXong: {
        backgroundColor: 'blue',
        width: '90%',  
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        marginTop:5,
        
    },
    textButtonXong:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:20,
    }
    
});
