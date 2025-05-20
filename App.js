import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './Apps/LoginScreen';
import RegisterScreen from './Apps/RegisterScreen';
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <PaperProvider>

    <NavigationContainer>
        <StatusBar style="auto" />
          <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

          </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
};

export default App;