import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Scr2TT({ route }) {
    const { user } = route.params; // Nhận thông tin người dùng từ Scr1
    const [userData, setUserData] = useState(user); // Lưu trữ người dùng với state để cập nhật job
    const navigation = useNavigation();

    useEffect(() => {
        // Cập nhật userData khi nhận dữ liệu từ Scr3
        if (route.params?.updatedUser) {
            setUserData(route.params.updatedUser);
        }   
    }, [route.params]);

    const handleDeleteJob = async (jobToDelete) => {
    // Hỏi người dùng trước khi xóa
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa công việc này?');

    if (confirmDelete) {
        // Lọc các công việc không phải là jobToDelete
        const updatedJobs = userData.job.filter(job => job !== jobToDelete);

        // Cập nhật state với userData mới
        setUserData(prevState => ({
            ...prevState,
            job: updatedJobs,
        }));

        // Cập nhật vào API
        try {
            const response = await fetch(`https://645b030265bd868e9328a7a2.mockapi.io/Cau1/${userData.id}`, {
                method: 'PUT', // hoặc 'PATCH'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...userData,
                    job: updatedJobs,
                }),
            });

            if (!response.ok) {
                throw new Error('Không thể cập nhật công việc.');
            }

            // Thông báo cho người dùng
            alert('Đã xóa công việc thành công!');
        } catch (error) {
            console.error('Error updating jobs in API:', error);
            alert('Đã xảy ra lỗi khi cập nhật công việc.');
        }
    }
};


    
    
    return (
        <View style={styles.container}>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.jobTitle}>Công việc:</Text>
            <FlatList 
                data={userData.job} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.jobItemContainer}>
                        <Text style={styles.jobItem}>{item}</Text>
                        <Button 
                            title="Edit" 
                            onPress={() => navigation.navigate('Scr3Edit', { user: userData, job: item })} // Điều hướng tới Scr4
                        />
                        <Button title="-" onPress={() => handleDeleteJob(item)} />
                    </View>
                )}
            />
            <Button title="Create" onPress={() => navigation.navigate('Scr4Create', { user: userData })} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    jobTitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    jobItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    jobItem: {
        fontSize: 16,
        flex: 1,
    },
});
