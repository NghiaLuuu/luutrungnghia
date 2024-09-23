import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';

export default function AppV1() {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.businessTextContainer}>
        <Text style={styles.businessText}>
          GROWS YOUR BUSINESSES
        </Text>
      </View>
      <View style={styles.helpTextContainer}>
        <Text style={styles.helpText}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#E3C000"
          title="Login"
        />
        <Button
          color="#E3C000"
          title="Sign Up"
        />
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
    borderRadius: 9999,
  },
  businessTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  businessText: {
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
  },
  helpTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpText: {
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
