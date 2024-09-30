import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import product from  './product.json'

const ItemProduct = ({product}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <Image source={product.image} style={styles.image}/>    
                </View>
                <View>
                    
                </View>
                <View>
                    <Text>{product.name}</Text>
                    <View style={styles.shopname}>
                        <Text style={{fontWeight:'bold'}}>Shop  </Text>
                        <Text>{product.shop}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonChat}>
                        <Text style={styles.textButtonChat}>Chat</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default function Scr1fl(){
    return(
        <View>
            <View>
                <FlatList
                    data={product}
                    renderItem={({item}) => (
                        <ItemProduct product={item}/>
                    )}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        padding: 10
    },
    image: {
        width:60,
        height:60
    },
    shopname: {
        flexDirection:'row',
    },
    buttonChat: {
        backgroundColor:'red',
        width:40,
        height:30,
        alignItems:'center',
        justifyContent: 'center'
    },
    textButtonChat: {
        color: 'white',
        textAlign: 'center'
    }
})
