import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TextInput,
} from 'react-native';

export default function AppV4() {
  return (
    <View
      style={{
        background:
          'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 20,
      }}>
      <Text style={{ fontWeight: 800, fontSize: 50, textAlign: 'center' }}>
        CODE
      </Text>
      <Text style={{ fontWeight: 700, fontSize: 20, textAlign: 'center' }}>
        VERIFICATIONS
      </Text>
      <Text style={{ fontWeight: 500, fontSize: 14, textAlign: 'center' }}>
        Enter ontime password sent on ++849092605798
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          minHeight: 40,
          alignItems: 'center',
        }}>
        <View
          style={{
            border: '1px solid black',
            flex: 1,
            textAlign: 'center',
            height: '100%',
            alignItems: 'center',
            justifyContent:"center"
          }}>
          1
        </View>
        <View
          style={{
            border: '1px solid black',
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent:"center"
          }}>
          1
        </View>
        <View
          style={{
            border: '1px solid black',
            flex: 1,
            textAlign: 'center',
            height: '100%',
            alignItems: 'center',
            justifyContent:"center"
          }}>
          1
        </View>
        <View
          style={{
            border: '1px solid black',
            flex: 1,
            textAlign: 'center',
            height: '100%',
            alignItems: 'center',
            justifyContent:"center"
          }}>
          1
        </View>
        <View
          style={{
            border: '1px solid black',
            flex: 1,
            textAlign: 'center',
            height: '100%',
            alignItems: 'center',
            justifyContent:"center"
          }}>
          1
        </View>
      </View>
    </View>
  );
}
