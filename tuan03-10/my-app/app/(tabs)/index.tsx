import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scr1 from '../../components/tuan05/scr1';
import Scr2 from '../../components/tuan05/scr2';
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Scr1'>
        <Stack.Screen name='Home' component={Scr1}/>
        <Stack.Screen name='Scr2' component={Scr2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;