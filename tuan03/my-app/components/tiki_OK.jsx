import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Imageicon from '@/assets/images/book.jpg'; 
import { TextInput } from 'react-native-gesture-handler';

export default function TiKIOK() {
    const [count, setCount] = useState(0);
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1); // Giảm số lượng nếu lớn hơn 0
        }
    };

    const handleIncrease = () => {
        setCount(count + 1); // Tăng số lượng
    };
    return (
        <View>
            <View style={styles.container}>
                <Image source={Imageicon} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>                
                    <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={styles.text2}>141.800 đ</Text>
                    <Text style={styles.text3}>141.800</Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleDecrease}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>    
                        <Text style={styles.quantity}>{count}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.buy}>Mua sau</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.container]}>
                    <Text style={styles.text4}>Mã giảm giá đã lưu</Text>
                    <Text style={styles.text5}>Xem tại đây</Text>
                </View>
                <View style={[styles.container, {justifyContent:'space-between'}]}>
                    <View style={[styles.container, styles.borderedContainer]}>
                        <View style={styles.rectangle}></View>
                        <Text style={styles.text6}>Mã giảm giá</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonApDung} onPress={() => {}}>
                            <Text style={[styles.buttonApDungText]}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            <View>
                <View style={styles.rectangle2}></View>
            </View>
            <View style={[styles.container, {justifyContent: 'space-between'}]}>
                <Text style={{ fontWeight: 'bold' }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={{ fontWeight: 'bold', color: 'blue' }}>Nhập tại đây</Text>
            </View>
            <View>
                <View style={styles.rectangle2}></View>
            </View>
            <View style={[styles.container, {justifyContent:'space-between'}]}>
                <Text style={{fontWeight:'bold'}}>Tạm tính</Text>
                <Text style={{fontSize:30, fontWeight:'bold', color:'red'}}>{(count * 141800).toLocaleString()} đ</Text>
            </View>
            <View>
                <View style={styles.rectangle3}></View>
            </View>
            <View style={[styles.container, {justifyContent:'space-between'}]}>
                <Text style={{fontWeight:'bold'}}>Thành tiền</Text>
                <Text style={{fontSize:30, fontWeight:'bold', color:'red'}}>{(count * 141800).toLocaleString()} đ</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonDatHang} onPress={() => {}}>
                    <Text style={[styles.buttonApDungText]}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
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
    button: {
        width: 40,  
        height: 40, 
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5, 
    },
    buttonText: {
        fontSize: 20, 
        color: 'white',
        fontWeight: 'bold',
    },
    quantity: {
        marginHorizontal: 10, 
        fontSize: 18,
        fontWeight: 'bold',
    },
    buy: {
        color: 'blue',
        fontWeight: 'bold',
        marginLeft: 90,
    },
    text4: {
        fontWeight: 'bold',
    },
    text5: {
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 20,
    },
    text6: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
    },
    rectangle: {
        width: 25,  
        height: 18, 
        backgroundColor: 'yellow',
        marginTop: 5,
    },
    borderedContainer: {
        borderWidth: 1,     
        borderColor: 'black', 
        borderRadius: 2,   
    },
    buttonApDung: {
        backgroundColor: '#008CBA', 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonApDungText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    rectangle2: { 
        height: 15, 
        backgroundColor: 'gray',
        marginTop: 20,
    },
    rectangle3: { 
        height: 80, 
        backgroundColor: 'gray',
        marginTop: 20,
    },
    buttonDatHang: {
        backgroundColor: 'red', 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
