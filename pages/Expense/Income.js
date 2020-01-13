import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Content, Card, ListItem, Button, Header, Left, Right, Icon, List } from 'native-base';
import moment from 'moment';
import Modal from 'react-native-modal';

export default class Income extends Component{
    state = {
        visibleModal: false,
        account: 'Select Account Type'
    };
    toggleModal(visible) {
        this.setState({ visibleModal: visible });
    }

    accountTextChanged=(accountText)=>{
        this.setState({account: accountText, visibleModal: false})
    }
    
    _renderAccountContent = () => (
            <List>
            <ListItem>
              <Text onPress={()=>{this.accountTextChanged('Cash')}}>Cash</Text>
            </ListItem>
            <ListItem>
              <Text onPress={()=>{this.accountTextChanged('Accounts')}}>Accounts</Text>
            </ListItem>
            <ListItem>
              <Text onPress={()=>{this.accountTextChanged('Card')}}>Card</Text>
            </ListItem>
            </List>
    );
    render(){
        const date = new Date();
        const current_date = moment(date).format("MM-DD-YYYY")
        return(
            <Container>
                <Content padder>
                    <Card padder>
                        <ListItem>
                            <Text style={styles.text}>Date: </Text>
                            <Text>{current_date}</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Account: </Text>
                            <TouchableOpacity onPress = {() => {this.toggleModal(true)}}>
                                <Text>{this.state.account}</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Category: </Text>
                            <TouchableOpacity>
                                <Text></Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Amount: </Text>
                            <TouchableOpacity>
                                <Text></Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Contents: </Text>
                            <TouchableOpacity>
                                <Text></Text>
                            </TouchableOpacity>
                        </ListItem>
                    </Card>
                    <Button block borderd success><Text style={styles.buttonText}>Save</Text></Button>

                    <Modal visible={this.state.visibleModal} style={styles.bottomModal}>
                        <Header style={styles.headerTab}>
                            <StatusBar backgroundColor="#ff7f00"></StatusBar>
                            <Left>
                                <Text style={styles.text1}>Account</Text>
                            </Left>
                            <Right>
                                <Icon type="Ionicons" name="close" style={styles.icon} onPress = {() => {this.toggleModal(false)}}></Icon>
                            </Right>
                        </Header>
                        {this._renderAccountContent()}
                    </Modal>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    },
    buttonText:{
        fontWeight: 'bold',
        color: '#fff'
    },
      button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      headerTab: {
          backgroundColor: '#000'
      },
      text1: {
          color: '#fff',
          fontWeight: 'bold'
      },
      icon: {
          color:'#fff'
      }
  });