import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import product from './product.json';

const ItemProduct = ({product}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image source={product.image} style={styles.image}/>
                <View style={styles.details}>
                    <Text>{product.name}</Text>
                    <View style={styles.shopname}>
                        <Text style={{fontWeight: 'bold'}}>Shop  </Text>
                        <Text>{product.shop}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonChat}>
                        <Text style={styles.textButtonChat}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default function Scr2fl() {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={product}
                renderItem={({item}) => <ItemProduct product={item}/>}
                numColumns={2}  
                keyExtractor={(item) => item.id.toString()}  
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        padding: 10,
        margin: 5,
        backgroundColor: '#f9f9f9',  
        borderRadius: 10,
    },
    image: {
        width: 60,
        height: 60,
    },
    details: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    shopname: {
        flexDirection: 'row',
    },
    buttonChat: {
        backgroundColor: 'red',
        width: 60,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    textButtonChat: {
        color: 'white',
        textAlign: 'center',
    },
});
