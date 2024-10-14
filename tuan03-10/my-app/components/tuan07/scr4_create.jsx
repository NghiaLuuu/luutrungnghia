import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Button, TextInput, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const API_URL = "https://645b030265bd868e9328a7a2.mockapi.io/Cau1";  

export default function Scr2TT() {
    const navigation = useNavigation();
    const route = useRoute();
    const { name } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState('');  
    const [city, setCity] = useState('');        

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
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

        fetchData();
    }, [name]);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image_link }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    );

    const handleAddPress = async () => {
        if (!address || !city) {
            Alert.alert("Error", "Please fill out both fields");
            return;
        }

        const item = data[0];

        const updatedItem = {
            ...item,
            adress: address,
            city: city
        };

        try {
            const response = await fetch(`${API_URL}/${item.id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedItem),
            });

            if (response.ok) {
                Alert.alert("Success", "Data has been updated successfully");
                setData(prevData => prevData.map(d => d.id === item.id ? updatedItem : d));
            } else {
                Alert.alert("Error", "Failed to update data");
            }
            navigation.navigate('Scr2TT', { name });
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong");
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {name}!</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter address"
                value={address}
                onChangeText={setAddress}  
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter city"
                value={city}
                onChangeText={setCity}  
            />
            <Button title="Add" onPress={handleAddPress} />
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});
