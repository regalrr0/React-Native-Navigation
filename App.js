import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen'
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName = "Home">
        <AppNavigator.Screen name = "Home" component={HomeScreen} options={{ title: 'Welcome!'}} />
        <AppNavigator.Screen name = "About" component={AboutScreen} options={{ title: 'About Us' }} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
