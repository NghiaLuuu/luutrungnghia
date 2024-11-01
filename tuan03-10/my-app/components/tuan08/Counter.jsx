import React, { useState } from 'react';
import { View, FlatList, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addJob, removeJob } from './reducer';

const Counter = () => {
  const [jobInput, setJobInput] = useState('');
  const users = useSelector(state => state.jobs.users);
  const dispatch = useDispatch();

  const handleAddJob = (userId) => {
    if (jobInput.trim()) {
      dispatch(addJob({ userId, job: jobInput }));
      setJobInput('');
    }
  };

  const handleRemoveJob = (userId, jobIndex) => {
    console.log({jobIndex})
    dispatch(removeJob({ userId, jobIndex }));
  };

  const renderJobItem = (userId, job, jobIndex) => (
  <View style={styles.jobContainer}>
    <Text style={styles.job}>{job}</Text>
    <Button title="Xóa" onPress={() => handleRemoveJob(userId, jobIndex)} />
  </View>
  );


  const renderUserItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.name}>{item.name}</Text>
    <FlatList
      data={item.jobs}
      renderItem={({ item: job, index }) => renderJobItem(item.id, job, index)} // Sử dụng item.id để truyền userId
      keyExtractor={(job, index) =>  index.toString()}
    />
    <TextInput
      style={styles.input}
      value={jobInput}
      onChangeText={setJobInput}
      placeholder="Thêm công việc"
    />
    <Button title="Thêm" onPress={() => handleAddJob(item.id)} />
  </View>
);


  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  job: {
    fontSize: 14,
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 5,
  },
});

export default Counter;
