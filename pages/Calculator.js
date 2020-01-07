//This is an example of Tab inside Navigation Drawer in React Native//
import React from 'react';
//import react in our code.
import {
  createAppContainer
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
 
//Import all the screens for Tab
import IncomeTax from '../component/IncomeTax';
import SalesTax from '../component/SalesTax';
import Vehicle from '../component/Vehicle'
 
const Calculator = createBottomTabNavigator(
  {
    IncomeTax: { screen: IncomeTax },
    SalesTax: { screen: SalesTax },
    Vehicle: { screen: Vehicle }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor :'#ffffff',
      inactiveTintColor :'#FF9800',
  
      activeBackgroundColor :'#FF9800',
      inactiveBackgroundColor :'#ffffff',
      labelStyle: {
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 16
      }
    },
  }
);
const TabHelper = createStackNavigator({
  Calculator: {
    screen: Calculator,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(TabHelper);