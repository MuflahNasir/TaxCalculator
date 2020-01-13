import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Input, Label, ListItem, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';

export default class Expenses extends Component{
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
                            <TouchableOpacity>
                                <Text></Text>
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
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    },
    buttonText:{
        fontWeight: 'bold',
        color: '#fff'
    }
  });