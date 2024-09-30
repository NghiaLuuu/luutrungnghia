import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scr1 from '../../components/tuan05/scr1';
import Scr2 from '../../components/tuan05/scr2';
import Scr3 from '../../components/tuan05/scr3';
import Flatlist_scr1 from '../../components/tuan06/scr1_flist';
import flatlist_scr2 from '../../components/tuan06/scr2_flist';
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen name='Scr1' component={Scr1}/>
        <Stack.Screen name='Scr2' component={Scr2}/>
        <Stack.Screen name='Scr3' component={Scr3}/>
        <Stack.Screen name='Flist_scr1' component={Flatlist_scr1}/>
        <Stack.Screen name='Flist_scr2' component={flatlist_scr2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;