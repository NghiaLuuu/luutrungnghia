import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function AppV2() {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GROWS YOUR BUSINESSES</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button
            color="#E3C000"
            title="Login"
            onPress={() => {}}
          />
          <Button
            color="#E3C000"
            title="Sign Up"
            onPress={() => {}}
          />
        </View>
        <Text style={styles.howWeWork}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00CCF9',
    flex: 1,
  },
  circleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 15,
    borderColor: 'black',
    height: 140,
    width: 140,
    borderRadius: 70, // Half of height/width for circle
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  description: {
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  howWeWork: {
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
});