import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scr1 from '../../components/tuan05/scr1';
import Scr2 from '../../components/tuan05/scr2';
import Scr3 from '../../components/tuan05/scr3';
import Scr1fl from '../../components/tuan06/scr1fl';
import Scr2fl from '../../components/tuan06/scr2fl';
import Scr1GK from '../../components/tuan07/scr1_GK';
import Scr2TT from '../../components/tuan07/scr2_TT';
import Scr3Edit from '../../components/tuan07/scr3_edit';
import Scr4Create from '../../components/tuan07/scr4_create';
import Counter from '../../components/tuan08/Counter';
import store from '../../components/tuan08/store'; // Cập nhật đường dẫn đến file store của bạn

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Counter" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Scr1" component={Scr1} />
          <Stack.Screen name="Scr2" component={Scr2} />
          <Stack.Screen name="Scr3" component={Scr3} />
          <Stack.Screen name="Scr1fl" component={Scr1fl} />
          <Stack.Screen name="Scr2fl" component={Scr2fl} />
          <Stack.Screen name="Scr1GK" component={Scr1GK} />
          <Stack.Screen name="Scr2TT" component={Scr2TT} />
          <Stack.Screen name="Scr3Edit" component={Scr3Edit} />
          <Stack.Screen name="Scr4Create" component={Scr4Create} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
