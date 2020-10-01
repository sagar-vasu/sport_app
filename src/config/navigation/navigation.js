import React from 'react';
import {Button, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  HomeScreen,
  AboutScreen,
  CategoriesScreen,
  ListScreen,
  PostDetailScreen,
} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const CategoriesStack = createStackNavigator();

const CategoriesStackScreen = ({navigation}) => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="Categories"
        options={{headerShown: false}}
        component={CategoriesScreen}
      />
      <CategoriesStack.Screen name="List" component={ListScreen} />
      <CategoriesStack.Screen name="PostDetail" component={PostDetailScreen} />
    </CategoriesStack.Navigator>
  );
};

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="deposit"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? (
                <MaterialCommunityIcons name="home" size={24} color="#033E9C" />
              ) : (
                <MaterialCommunityIcons name="home" size={24} color="#78839C" />
              );
            } else if (route.name === 'Categories') {
              iconName = focused ? (
                <View
                  style={{
                    backgroundColor: '#D00E42',

                    borderRadius: 40,
                    elevation: 4,
                    marginBottom: 20,
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="clipboard-list"
                    size={24}
                    color="white"
                  />
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: '#fff',

                    borderRadius: 40,
                    elevation: 4,
                    marginBottom: 20,
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="clipboard-list"
                    size={24}
                    color="#78839C"
                  />
                </View>
              );
            } else if (route.name === 'About') {
              iconName = focused ? (
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="#033E9C"
                />
              ) : (
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="#78839C"
                />
              );
            }

            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#033E9C',
          inactiveTintColor: '#78839C',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Categories"
          options={{tabBarLabel: ''}}
          component={CategoriesStackScreen}
        />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
