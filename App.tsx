import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainMenu from './components/screens/MainMenu';
import GameScreen from './components/screens/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainMenu">
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen options={{ gestureEnabled: false }} name="GameScreen" component={GameScreen} />  
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
