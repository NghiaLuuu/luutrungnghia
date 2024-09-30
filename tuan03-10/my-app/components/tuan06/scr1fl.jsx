import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import product from  './product.json'

const ItemProduct = ({product}) => {
    return (
        <View>
            <View>
                <Text>{product.name}</Text>
                
            </View>
        </View>
    )
}

export default function Scr1fl(){
    return(
        <View>
            <View>
                <Text>ABC</Text>
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
