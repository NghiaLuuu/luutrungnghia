import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scr1 from '../../components/tuan05/scr1';
import Scr2 from '../../components/tuan05/scr2';
import Scr3 from '../../components/tuan05/scr3';
import Scr1fl from '../../components/tuan06/scr1fl';
import Scr2fl from '../../components/tuan06/scr2fl';
import Scr1GK from '../../components/tuan07/scr1_GK';
import Scr2Create from '../../components/tuan07/scr2_create';
import Scr3Edit from '../../components/tuan07/scr3_edit';
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Scr3Edit' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Scr1' component={Scr1}/>
        <Stack.Screen name='Scr2' component={Scr2}/>
        <Stack.Screen name='Scr3' component={Scr3}/>
        <Stack.Screen name='Scr1fl' component={Scr1fl}/>
        <Stack.Screen name='Scr2fl' component={Scr2fl}/>
        <Stack.Screen name='Scr1GK' component={Scr1GK}/>
        <Stack.Screen name='Scr2Create' component={Scr2Create}/>
        <Stack.Screen name='Scr3Edit' component={Scr3Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;