import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button, Alert, FlatList, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Scr1GK() {
    const [query, setQuery] = useState(''); // Thay đổi để lưu truy vấn tìm kiếm
    const [users, setUsers] = useState([]); // Thay đổi để lưu danh sách người dùng
    const navigation = useNavigation();

    // Hàm lấy tất cả người dùng từ API khi khởi động
    useEffect(() => {
        const URL = "https://645b030265bd868e9328a7a2.mockapi.io/Cau1"; 
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setUsers(data); // Lưu danh sách người dùng
            })
            .catch(err => {
                console.error("Error fetching users:", err);
            });
    }, []); // Chỉ chạy một lần khi component được mount

    const getUser = () => {
        // Tìm kiếm người dùng theo tên hoặc công việc
        const foundUser = users.find(user => 
            user.name.toLowerCase() === query.toLowerCase() || 
            user.job.includes(query.toLowerCase())
        );

        if (foundUser) {
            // Nếu tìm thấy, chuyển đến Scr2 và truyền thông tin người dùng
            navigation.navigate('Scr2TT', { user: foundUser });
        } else {
            // Nếu không tìm thấy, hiển thị thông báo
            Alert.alert("Thông báo", "Không tìm thấy người dùng.");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder="Nhập tên hoặc công việc" 
                value={query} 
                onChangeText={setQuery} 
            />
            <Button title="Get User" onPress={getUser} />

            <FlatList 
                data={users} // Dữ liệu lấy từ API
                keyExtractor={user => user.id} // Khóa duy nhất cho mỗi mục
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.job}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
});
