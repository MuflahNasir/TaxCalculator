import React, { Component } from 'react';
//import react in our code.
import { View, Text } from 'react-native';
import { Card, Grid, Col, Fab, Icon } from 'native-base'
// import all basic components
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
//import Pages
import Expense from './Expense'
import Stats from "./Stats";
//import styles
import { styles } from './styles'

class Home extends Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <View>
          <Card cardbody style={styles.conatiner}>
            <Grid>
              <Col style={styles.text}>
                <Text>
                  Income
                </Text>
                <Text note style={styles.note1}>0.00</Text>
              </Col>
              <Col style={styles.text}>
                <Text>
                  Expense
                </Text>
                <Text note style={styles.note2}>0.00</Text>
              </Col>
              <Col style={styles.text}>
                <Text>
                  Total
                </Text>
                <Text note>0.00</Text>
              </Col>
            </Grid>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Fab
            style={styles.fab}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('Expense')}>
            <Icon name="add" />
          </Fab>
        </View>
      </View>
    );
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions:{  
          tabBarLabel:'Transition',
          tabBarIcon:({tintColor})=>(  
              <Icon name="list" color={tintColor} size={14}/>  
          )  
        }   
      },
    Stats: {
      screen: Stats,
      tabBarLabel:'Stats',
      navigationOptions:{  
          tabBarIcon:({tintColor})=>(  
              <Icon name="stats" color={tintColor} size={14}/>  
          )  
        } 
      },
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
        fontSize: 12
      }
    },
  }
);

const Expensepage = createStackNavigator({
  Home: {
    screen: AppNavigator
  },
  Expense: {
    screen: Expense
  }
},
{
  // see next line
  headerMode: 'none',
});
export default createAppContainer(Expensepage);