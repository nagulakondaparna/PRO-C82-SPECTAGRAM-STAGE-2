import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';

import CreatePost from '../screen/CreatePost';
import Feed from '../screen/Feed';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CreatePost') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return (
            <Icon
              name={iconName}
              type="ionicon"
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      activeColor={'#ee8249'}
      inactiveColor={'gray'}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default TabNavigator;
