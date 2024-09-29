import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scr1 from '../../components/tuan05/scr1';
import Scr2 from '../../components/tuan05/scr2';
import Scr3 from '../../components/tuan05/scr3';
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Scr2'>
        <Stack.Screen name='Scr1' component={Scr1}/>
        <Stack.Screen name='Scr2' component={Scr2}/>
        <Stack.Screen name='Scr3' component={Scr3}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;