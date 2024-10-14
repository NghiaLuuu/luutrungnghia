import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Button, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const API_URL = "https://645b030265bd868e9328a7a2.mockapi.io/Cau1";

export default function Scr2TT() {
    const navigation = useNavigation();
    const route = useRoute();
    const { name } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true); // Bắt đầu tải dữ liệu
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Phản hồi mạng không ổn định');
            }
            const jsonData = await response.json();

            const filteredData = jsonData.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
            setData(filteredData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Lấy dữ liệu khi màn hình được tải

        const unsubscribe = navigation.addListener('focus', () => {
            fetchData(); // Lấy dữ liệu khi màn hình quay lại tiêu điểm
        });

        return unsubscribe; // Dọn dẹp lắng nghe
    }, [navigation]);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image_link }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Giá: {item.price}</Text>
            <Text style={styles.address}>Địa chỉ: {item.adress}</Text>
            <Text style={styles.description}>Thành phố: {item.city}</Text>
            <Text style={styles.phone}>Điện thoại: {item.phone}</Text>
            <Button
                title="Sửa"
                onPress={() => navigation.navigate('Scr3Edit', { item })} 
            />
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chào mừng, {name}!</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <Button title="Tạo mới" onPress={() => navigation.navigate('Scr4Create', { name })} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    listContainer: {
        padding: 10,
    },
    itemContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: 'gray',
    },
    address: {
        fontSize: 16,
        color: 'gray',
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    phone: {
        fontSize: 14,
        color: '#555',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
