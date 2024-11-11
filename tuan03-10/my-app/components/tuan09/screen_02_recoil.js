import React, { useEffect } from 'react';
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { dataState, loadingState, fetchDataSelector } from '../recoil/atoms';

export default function Screen_02({ navigation, route }) {
  const name = "nghialuu";
  const [data, setData] = useRecoilState(dataState);
  const setLoading = useSetRecoilState(loadingState);
  const dataLoadable = useRecoilValueLoadable(fetchDataSelector);

  useEffect(() => {
    // Use Recoil's Loadable to fetch data when the component mounts
    if (dataLoadable.state === 'hasValue') {
      setData(dataLoadable.contents);
      setLoading(false);
    } else if (dataLoadable.state === 'loading') {
      setLoading(true);
    } else if (dataLoadable.state === 'hasError') {
      console.error('Error loading data');
      setLoading(false);
    }
  }, [dataLoadable, setData, setLoading]);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 15 }}>
      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image source={require('../Icon_Button_12.png')} />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('../Avatar_31.png')} />
          <View>
            <Text>Hi {name}</Text>
            <Text>Have a nice day</Text>
          </View>
        </View>
      </View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '90%',
          padding: 10,
          borderRadius: 20,
          fontWeight: '700',
          color: 'gray',
        }}
        placeholder="Enter your name ..."
      />
      {dataLoadable.state === 'loading' ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: '300px', backgroundColor: 'red', padding: 15, margin: 3, borderRadius: 20 }}>
              <Text>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={{ flex: 1, width: '100%' }}
          scrollEnabled={true}
        />
      )}
      <TouchableOpacity
        style={{ padding: 15, borderRadius: 100, backgroundColor: 'green' }}
        onPress={() => setData(dataLoadable.contents)} // Manually refresh data
      >
        <Text style={{ color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}