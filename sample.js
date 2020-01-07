import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import IncomeTax from './component/IncomeTax';
import SalesTax from './component/SalesTax';
import MaterialTabs from 'react-native-material-tabs';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import email from 'react-native-email';
import TaxSlab1 from './component/TaxSlab1';
import Vehicle from './component/Vehicle';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';

export default class App extends Component{
    _menu = null;
 
    constructor(props) {
      super(props);
      this.state = { val: 0};
    }
    
    handleEmail = () => {
      this._menu.hide();
      const to = ['info@idea94.com'] // string or array of email addresses
      email(to, {
          subject: 'Enter subject',
          body: 'Write your message here....'
      }).catch(console.error)
  }
  
    setMenuRef = ref => {
      this._menu = ref;
    };
   
    hideMenu = () => {
      this._menu.hide();
    };
   
    showMenu = () => {
      this._menu.show();
    };
  
    setTab(tab) {
      this.setState({ val: tab });
    }
    renderElement() {
      if (this.state.val === 0) {
        return <IncomeTax />;
      }
      else if (this.state.val === 1) {
        return <SalesTax />;
      }
      else if (this.state.val === 2) {
        return <Vehicle />;
      }
      else if (this.state.val === 3) {
        this._menu.hide();
        return <TaxSlab1 />;
      }
    }
  
    render(){
      var yourPicture = require ('./assets/dot.png');
        return (
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>Tax Calculator (2019-2020)</Text>
              <Menu 
              ref={this.setMenuRef}
              button={<TouchableOpacity onPress={this.showMenu}><Image style={{width: 20, height: 20, marginTop: 28, marginLeft: 30}}
              source={yourPicture}></Image></TouchableOpacity>}
              >
              <MenuItem onPress={this.handleEmail}>Feedback</MenuItem>
              <MenuDivider/>
              <MenuItem onPress={() => this.setState({ val: 3})} >Tax Slab</MenuItem>
              </Menu>
              </View>
              <View style={styles.paragraph}>
                  {this.renderElement()}
              </View>
              <Footer>
                <FooterTab style ={styles.tab} tabBarTextColor='white' tabBarActiveTextColor='#ff7f00' tabActiveBgColor='white'>
                  <Button onPress={() => this.setState({ val: 0})}>
                    <Text style={styles.text}>INCOME TAX</Text>
                  </Button>
                  <Button onPress={() => this.setState({ val: 1})}>
                    <Text style ={styles.text}>SALES TAX</Text>
                  </Button>
                  <Button onPress={() => this.setState({ val: 2})}>
                    <Text style ={styles.text}>VEHICLE</Text>
                  </Button>
                </FooterTab>
              </Footer>
            </View>
          );
      }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff7f00',
      height: 50,
    },
    container1: {
      flex: 1,
      backgroundColor: '#ff7f00',
      height: 50,
      marginTop: 20
    },
    title: {
      color: '#fff',
      marginTop: 20,
      marginLeft: 40,
      fontSize: 20,
      fontWeight: 'bold'
    },
    paragraph: {
      flex: 10,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#fff',
      marginTop: 30
    },
    button: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      margin: 2,
    },
    text: {
      color: 'white'
    },
    tab: {
      backgroundColor: '#ff7f00'
    }
  });