import React, {Component} from 'react';
import { TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { 
    Container, 
    Content, 
    Card, 
    Text, 
    ListItem, 
    Button, 
    Header, 
    Left, 
    Right, 
    Icon, 
    List } from 'native-base';
import moment from 'moment';
import Modal from 'react-native-modal';
import { styles } from './styles'

export default class Expenses extends Component{
    state = {
        visibleModal: null,
        account: '',
        category: ''
    };
    //set visibility of Modal
    toggleModal(visible) {
        this.setState({ visibleModal: visible });
    }
    //On Account Selection Changed
    accountTextChanged=(accountText)=>{
        this.setState({account: accountText, visibleModal: null})
    }
    //On Category selection changed
    categoryTextChanged=(categoryText)=>{
        this.setState({category: categoryText, visibleModal: null})
    }
    //Content for Account Section
    _renderAccountContent = () => (
        <List style ={styles.modalContent}>
            <ListItem onPress={()=>{this.accountTextChanged('Cash')}}>
                <Text>Cash</Text>
            </ListItem>
            <ListItem onPress={()=>{this.accountTextChanged('Accounts')}}>
                <Text>Accounts</Text>
            </ListItem>
            <ListItem onPress={()=>{this.accountTextChanged('Card')}}>
                <Text>Card</Text>
            </ListItem>
        </List>
    );
    //Content for category section
    _renderCategoryContent = () => (
        <ScrollView style = {styles.modalContent}>
            {/* <List.Section title = 'Accordions'>
                <List.Accordion
                title="Food"
                left = {props => <List.Icon {...props} icon = 'food' />}>
                    <List.Item title = "Lunch" />
                    <List.Item title = "Dinner" />
                    <List.Item title = "Eating out" />
                    <List.Item title = "Beverages" />
                    <List.Item title = "Groceries" />
                </List.Accordion>
                <List.Accordion
                title="Car"
                left = {props => <List.Icon {...props} icon = 'car' />}>
                    <List.Item title = "850cc" />
                    <List.Item title = "851cc-1000cc" />
                    <List.Item title = "1001cc-1300cc" />
                    <List.Item title = "1301cc-1600cc" />
                    <List.Item title = "1601cc-1800cc" />
                    <List.Item title = "1801cc-2000cc" />
                    <List.Item title = "2001cc-2500cc" />
                    <List.Item title = "2501cc-3000cc" />
                    <List.Item title = "3001cc-onwards" />
                </List.Accordion>
                <List.Accordion
                title="Households"
                left = {props => <List.Icon {...props} icon = 'house' />}>
                    <List.Item title = "Appliances" />
                    <List.Item title = "Furniture" />
                    <List.Item title = "Kitchen" />
                    <List.Item title = "Tioletries" />
                    <List.Item title = "Chandler" />
                </List.Accordion>
            </List.Section> */}
        </ScrollView>
    );
    render(){
        //Get current date from moment.js
        const date = new Date();
        const current_date = moment(date).format("MM-DD-YYYY")
        return(
            <Container>
                <Content padder>
                    <Card padder>
                        <ListItem>
                            <Text style={styles.text}>Date: </Text>
                            {/* Pass current date to Text field */}
                            <Text>{current_date}</Text>
                        </ListItem>
                        <ListItem onPress = {() => {this.toggleModal(1)}}>
                            <Text style={styles.text}>Account: </Text>
                            <TouchableOpacity>
                                <Text>{this.state.account}</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem onPress = {()=> {this.toggleModal(2)}}>
                            <Text style={styles.text}>Category: </Text>
                            <TouchableOpacity>
                                <Text>{this.state.category}</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Amount: </Text>
                            <TouchableOpacity>
                                <Text></Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Amount with Tax: </Text>
                            <Text></Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Contents: </Text>
                            <TouchableOpacity>
                                <Text></Text>
                            </TouchableOpacity>
                        </ListItem>
                    </Card>
                    <Button block borderd success><Text style={styles.buttonText}>Save</Text></Button>
                    {/* Model for Account section */}
                    <Modal visible={this.state.visibleModal === 1} style={styles.bottomModal}>
                        <Header style={styles.headerTab}>
                            <StatusBar backgroundColor="#ff7f00"></StatusBar>
                            <Left>
                                <Text style={styles.text1}>Account</Text>
                            </Left>
                            <Right>
                                <Icon type="Ionicons" name="close" style={styles.icon} onPress = {() => {this.toggleModal(null)}}></Icon>
                            </Right>
                        </Header>
                        {this._renderAccountContent()}
                    </Modal>
                    {/* Model for Category section */}
                    <Modal visible={this.state.visibleModal === 2} style={styles.bottomModal}>
                        <Header style={styles.headerTab}>
                            <StatusBar backgroundColor="#ff7f00"></StatusBar>
                            <Left>
                                <Text style={styles.text1}>Category</Text>
                            </Left>
                            <Right>
                                <Icon type="Ionicons" name="close" style={styles.icon} onPress = {() => {this.toggleModal(null)}}></Icon>
                            </Right>
                        </Header>
                        {this._renderCategoryContent()}
                    </Modal>
                </Content>
            </Container>
        )
    }
}