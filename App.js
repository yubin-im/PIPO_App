import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Logo from './screens/Logo';
import Main from './screens/Main';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Logo">
                <Stack.Screen
                    name="LogoDummy"
                    component={Logo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: '로그인' }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ title: '회원가입' }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ title: '메인' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
