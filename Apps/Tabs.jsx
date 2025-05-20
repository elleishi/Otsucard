import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home' 
            screenOptions={{ 
                tabBarStyle: {
                    height: 50,
                    borderTopWidth: .8,
                    paddingHorizontal: 0,
                    paddingVertical: 7,
                },
                tabBarActiveTintColor: '#4f653e',
                tabBarInactiveTintColor: '#CACFB0',
            }}
        >


        <Tab.Screen
            name="Home"
            component={LoginScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
            )
            }}
        />


        <Tab.Screen
            name="Services"
            component={RegisterScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={24} color="black" />
                ),
            }}
        />
    


        <Tab.Screen
            name="Analytics"
            component={RegisterScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={24} color="black" />
                ),
            }}
        />
    
        <Tab.Screen
            name="More"
            component={RegisterScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={24} color="black" />
                ),
            }}
        />
    

    </Tab.Navigator>
)
}


export default Tabs;