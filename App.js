import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import Home from './screens/home';
import * as Font from 'expo-font';
import ReviewDetails from './screens/reviewDetails';
// import { StyleSheet } from 'react-native';



const loadFonts = async () => {
  await Font.loadAsync({
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

const Stack = createNativeStackNavigator();
export default function App() {
 
  useEffect(() => {
    loadFonts();
  }, []);

    return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#f4511e',
            height: 60,
          },
          headerTintColor: '#fff',
          
        }}
      >
        <Stack.Screen name='Home' component={Home} options={{ title: 'GameZone' } } />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  
    
  

}