import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Imageicon from '@/assets/images/vs_red.png';
import Star from '@/assets/images/star.jpg';

export default function Scr1() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image source={Imageicon} style={styles.image} />
                <Text style={styles.text1}>Điện Thoại VSMART Joy 3 - Hàng Chính Hãng</Text>
            </View>
            <View style={styles.ratingContainer}>
                <View style={styles.starsContainer}>
                    <Image source={Star} style={styles.star} />
                    <Image source={Star} style={styles.star} />
                    <Image source={Star} style={styles.star} />
                    <Image source={Star} style={styles.star} />
                    <Image source={Star} style={styles.star} />
                </View>
                <View>
                    <Text>(Xem 828 đánh giá)</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>1.790.000 đ</Text>
                <Text style={{fontSize:15, fontWeight:'bold', textDecorationLine: 'line-through', color:'gray', marginRight:100}}>1.790.000 đ</Text>
            </View>
            <View style={{flexDirection:'row', width: '100%'}}>
                <Text style={{color:'red', fontWeight:'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Text style={styles.circle}>  ?</Text>
            </View>
            <View style={styles.textChonMau}>
                <Text style={{marginLeft:120}}>4 MÀU-CHỌN MÀU</Text>
                <Text style={{fontSize:30,marginLeft:100}}>&#62;</Text>
            </View>
            <View style={{marginTop:40, width:'100%'}}>
                <TouchableOpacity style={styles.button} 
                onPress={() => navigation.navigate('Scr2')
                }>
                    <Text style={styles.buttonText}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 350,
        height: 350,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',  
    },
    star: {
        width: 30,
        height: 30,
    },
    text1: {
        textAlign: 'center',
        fontSize:18,
    },
    circle: {
        borderColor: 'black',
        borderWidth: 2,
        width:25,
        height:25,
        borderRadius: 50, 
        marginLeft:10,
    },
    textChonMau: {
        borderColor: 'black',
        borderWidth: 2,
        width: '100%',
        fontWeight: 'bold',
        borderRadius: 40,
        flexDirection:'row',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    button: {
        width: '100%',  
        height: 40, 
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40, 
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
