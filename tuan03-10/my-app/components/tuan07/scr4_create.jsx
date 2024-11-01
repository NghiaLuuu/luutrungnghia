import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Scr3Edit({ route }) {
    const { user, job } = route.params; // Nhận thông tin người dùng và công việc cần chỉnh sửa
    const [updatedJob, setUpdatedJob] = useState(job); // Trạng thái lưu công việc đã cập nhật
    const navigation = useNavigation();

    const handleUpdateJob = () => {
        if (updatedJob) {
            const updatedJobs = user.job.map(item => (item === job ? updatedJob : item));
            const updatedUser = { ...user, job: updatedJobs };

            // Cập nhật API
            const URL = `https://645b030265bd868e9328a7a2.mockapi.io/Cau1/${user.id}`;
            fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            })
            .then(response => response.json())
            .then(data => {
                Alert.alert("Thành công", "Đã cập nhật công việc");
                navigation.navigate('Scr2', { updatedUser: data }); // Quay lại Scr2 với dữ liệu đã cập nhật
            })
            .catch(err => {
                Alert.alert("Lỗi", "Không thể cập nhật công việc.");
                console.error("Error updating job:", err);
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
                value={updatedJob} 
                onChangeText={setUpdatedJob} 
            />
            <Button title="OK" onPress={handleUpdateJob} />
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
