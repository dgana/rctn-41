import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from '../Profile';
import About from '../About';

const Tab = createBottomTabNavigator();

const Detail = ({route}) => {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="About" component={About} initialParams={route.params} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={route.params}
      />
    </Tab.Navigator>
  );
};

export default Detail;
