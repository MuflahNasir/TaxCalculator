//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { Icon } from 'native-base'
 
//Import required react-navigation component 
import {
  createAppContainer
} from 'react-navigation';

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
 
//Import all the screens for Drawer/ Sidebar
import Home from './pages/Home';
import Calculator from './pages/Calculator';

import email from 'react-native-email';
import TaxSlab1 from './component/TaxSlab1';
 
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  
  handleEmail = () => {
    const to = ['info@idea94.com'] // string or array of email addresses
    email(to, {
        subject: 'Enter subject',
        body: 'Write your message here....'
    }).catch(console.error)
}
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon name = 'menu' style = {styles.icon}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}
 
//Stack Navigator for First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Tax Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Calculator,
    navigationOptions: ({ navigation }) => ({
      title: 'Tax Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for Second Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Third: {
    screen: TaxSlab1,
    navigationOptions: ({ navigation }) => ({
      title: 'Tax Slabs (2019-2020)',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerContent = (props) => (
  <View>
    <View
      style={{
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={require('./assets/new5.png')} style={styles.image}></Image>
    </View>
    <DrawerItems {...props} />
    {/* <TouchableOpacity onPress={this.handleEmail}><Icon name='mail' style={styles.email}><Text style={styles.text}>Feedback</Text></Icon></TouchableOpacity> */}
  </View>
)

//Drawer Navigator for the Navigation Drawer / Sidebar
const DrawerNavigatorExample = createDrawerNavigator(
  {
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => (
        <Icon name = "home"></Icon>
      ),
    },
  },
 
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Calculator',
      drawerIcon: () => (
        <Icon name = "calculator"></Icon>
      ),
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Tax Slabs',
      drawerIcon: () => (
        <Icon name = "list"></Icon>
      ),
    },
  }
},
{
  // define customComponent here
  contentComponent: DrawerContent,
  contentOptions: {
    activeTintColor :'#ffffff',
     inactiveTintColor :'#FF9800',
  
    activeBackgroundColor :'#FF9800',
    inactiveBackgroundColor :'#ffffff',
  }
},
);

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    marginLeft: 10,
    marginTop: 5
    },
    image: {
      width: 150,
      height: 150
    },
    email: {
      flexDirection: 'row',
      marginLeft: 19,
      marginRight: 20
    },
    text: {
      fontSize: 16,
      color: '#FF9800',
      fontWeight: 'bold',
      justifyContent: 'center'
    }
});
export default createAppContainer(DrawerNavigatorExample);