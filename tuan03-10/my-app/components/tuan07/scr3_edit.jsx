import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function Scr3Edit({ route, navigation }) {
  const { item } = route.params; 
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [address, setAddress] = useState(item.address); // Đã sửa lỗi chính tả
  const [city, setCity] = useState(item.city);
  const [phone, setPhone] = useState(item.phone);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://645b030265bd868e9328a7a2.mockapi.io/Cau1/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          price,
          address, // Đã sửa lỗi chính tả
          city,
          phone,
          image_link: item.image_link, 
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể cập nhật thông tin');
      }

      Alert.alert('Thông báo', 'Cập nhật thông tin thành công!');
      navigation.goBack(); 
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra trong quá trình cập nhật.');
    }
  };

  const handleDeleteProperty = async (property) => {
    // Tạo một bản sao của đối tượng item
    const updatedItem = { ...item };
  
    // Xóa thuộc tính
    delete updatedItem[property];
  
    // Cập nhật trạng thái của thuộc tính trong ứng dụng
    switch (property) {
      case 'name':
        setName('');
        break;
      case 'price':
        setPrice('');
        break;
      case 'address':
        setAddress('');
        break;
      case 'city':
        setCity('');
        break;
      case 'phone':
        setPhone('');
        break;
      default:
        break;
    }
  
    try {
      // Tạo body mới chỉ bao gồm các thuộc tính còn lại
      const body = {
        image_link: updatedItem.image_link, // Giữ lại image_link
      };
  
      // Chỉ thêm các thuộc tính nếu chúng không bị xóa
      if (updatedItem.name) body.name = updatedItem.name;
      if (updatedItem.price) body.price = updatedItem.price;
      if (updatedItem.address) body.address = updatedItem.address;
      if (updatedItem.city) body.city = updatedItem.city;
      if (updatedItem.phone) body.phone = updatedItem.phone;
  
      const response = await fetch(`https://645b030265bd868e9328a7a2.mockapi.io/Cau1/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body), // Gửi đối tượng đã sửa đổi
      });
  
      if (!response.ok) {
        throw new Error('Không thể xóa thuộc tính');
      }
  
      Alert.alert('Thông báo', `Đã xóa thuộc tính ${property} thành công!`);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra trong quá trình xóa thuộc tính.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉnh sửa thông tin</Text>
      
      {/* Tên */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Tên"
        />
        <TouchableOpacity onPress={() => handleDeleteProperty('name')} style={styles.deleteButton}>
          <Text style={styles.deleteText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Giá */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Giá"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => handleDeleteProperty('price')} style={styles.deleteButton}>
          <Text style={styles.deleteText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Địa chỉ */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={address} // Đã sửa lỗi chính tả
          onChangeText={setAddress} // Đã sửa lỗi chính tả
          placeholder="Địa chỉ"
        />
        <TouchableOpacity onPress={() => handleDeleteProperty('address')} style={styles.deleteButton}>
          <Text style={styles.deleteText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Thành phố */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Thành phố"
        />
        <TouchableOpacity onPress={() => handleDeleteProperty('city')} style={styles.deleteButton}>
          <Text style={styles.deleteText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Điện thoại */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Điện thoại"
          keyboardType="phone-pad"
        />
        <TouchableOpacity onPress={() => handleDeleteProperty('phone')} style={styles.deleteButton}>
          <Text style={styles.deleteText}>-</Text>
        </TouchableOpacity>
      </View>

      <Button title="Lưu" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#ffcccc', // Màu nền cho nút xóa
    borderRadius: 15,
  },
  deleteText: {
    fontSize: 20,
    color: 'red',
  },
});
