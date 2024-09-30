import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scr1 from '../../components/tuan05/scr1';
import Scr2 from '../../components/tuan05/scr2';
import Scr3 from '../../components/tuan05/scr3';
import Scr1fl from '../../components/tuan06/scr1fl';
import Scr2fl from '../../components/tuan06/scr2fl';
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Scr1fl' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Scr1' component={Scr1}/>
        <Stack.Screen name='Scr2' component={Scr2}/>
        <Stack.Screen name='Scr3' component={Scr3}/>
        <Stack.Screen name='Scr1fl' component={Scr1fl}/>
        <Stack.Screen name='Scr2fl' component={Scr2fl}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;