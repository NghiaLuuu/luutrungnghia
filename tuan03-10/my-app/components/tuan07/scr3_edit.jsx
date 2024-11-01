import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Scr4Create({ route }) {
    const { user } = route.params; // Nhận thông tin người dùng từ Scr2
    const [newJob, setNewJob] = useState(''); // Trạng thái lưu công việc mới
    const navigation = useNavigation();

    // Hàm xử lý thêm công việc mới vào API
    const handleAddJob = () => {
        if (newJob) {
            const updatedUser = {
                ...user,
                job: [...user.job, newJob], // Cập nhật mảng công việc
            };

            // Gửi yêu cầu PUT tới API để cập nhật
            const URL = `https://645b030265bd868e9328a7a2.mockapi.io/Cau1/${user.id}`; // Đường dẫn API với id của người dùng
            fetch(URL, {
                method: 'PUT', // PUT để cập nhật người dùng với công việc mới
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            })
            .then(response => response.json())
            .then(data => {
                Alert.alert("Thành công", "Đã thêm công việc mới");
                // Quay lại Scr2 với dữ liệu được cập nhật từ API
                navigation.navigate('Scr2', { user: data, updatedUser: data });
            })
            .catch(err => {
                Alert.alert("Lỗi", "Không thể thêm công việc mới.");
                console.error("Error updating user:", err);
            });
        } else {
            Alert.alert("Thông báo", "Vui lòng nhập công việc mới");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.userName}>Tên người dùng: {user.name}</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Nhập công việc mới" 
                value={newJob} 
                onChangeText={setNewJob} 
            />
            <Button title="Add Job" onPress={handleAddJob} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
});
