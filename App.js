/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Detalhe from './src/components/Detalhe';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Loja de luminárias' }} />
        <Stack.Screen name="Detalhes" component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;