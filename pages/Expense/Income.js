import React, {Component} from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { 
    Container, 
    Text, 
    Content, 
    Card, 
    ListItem, 
    Button, 
    Header, 
    Left, 
    Right, 
    Icon, 
    List, 
    View,
    Input} from 'native-base';
import moment from 'moment';
import Modal from 'react-native-modal';
import { styles } from './styles'
import Keyboard from 'react-native-keyboard';

let model = {
    
    _keys: [],

    _listeners: [],

    addKey(key) {
        this._keys.push(key);
        this._notify();
    },

    delKey() {
        this._keys.pop();
        this._notify();
    },

    clearAll() {
        this._keys = [];
        this._notify();
    },

    getKeys() {
        return this._keys;
    },

    onChange(listener) {
        if (typeof listener === 'function') {
            this._listeners.push(listener);
        }
    },

    _notify() {
        this._listeners.forEach((listner) => {
            listner(this);
        });
    }
};

export default class Income extends Component{
    state = {
        visibleModal: null,
        account: '',
        category: '',
        amount: '0'
    };
    //set visibility of modal
    toggleModal(visible) {
        this.setState({ visibleModal: visible });
    }
    //On change of selected value for account section
    accountTextChanged=(accountText)=>{
        this.setState({account: accountText, visibleModal: null})
    }
    //On change of selected value for category section
    categoryTextChanged=(accountText)=>{
        this.setState({visibleModal: null, category: accountText})
    }
    //On change of value of amount
    componentDidMount() {
        model.onChange((model) => {
            this.setState({amount: model.getKeys().join('')});
        });
    }
    //On clear keyboard
    _handleClear() {
        model.clearAll();
    }
    //On delete key on keyboard
    _handleDelete() {
        model.delKey();
    }
    //On press key of keyboard
    _handleKeyPress(key) {
        model.addKey(key);
    }
    //render content for account section
    _renderAccountContent = () => (
        <List style={styles.modalContent}>
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
    //render content for category section
    _renderCategoryContent = () => (
        <List style={styles.modalContent}>
            <ListItem onPress={()=> {this.categoryTextChanged('Allowance')}}>
                <Text>Allowance</Text>
            </ListItem>
            <ListItem onPress={()=> {this.categoryTextChanged('Salary')}}>
                <Text>Salary</Text>
            </ListItem>
            <ListItem onPress={()=> {this.categoryTextChanged('Petty Cash')}}>
                <Text>Petty Cash</Text>
            </ListItem>
            <ListItem onPress={()=> {this.categoryTextChanged('Bonus')}}>
                <Text>Bonus</Text>
            </ListItem>
            <ListItem onPress={()=> {this.categoryTextChanged('Other')}}>
                <Text>Other</Text>
            </ListItem>
        </List>
    );
    //On render amount content
    renderAmountContent = () => (
        <View>
            <Keyboard 
                keyboardType="decimal-pad"
                onClear={this._handleClear.bind(this)}
                onDelete={this._handleDelete.bind(this)}
                onKeyPress={this._handleKeyPress.bind(this)}
            />
        </View>
    );
    render(){
        //get current date form moment.js
        const date = new Date();
        const current_date = moment(date).format("MM-DD-YYYY")
        return(
            <Container>
                <Content padder>
                    <Card padder>
                        <ListItem>
                            <Text style={styles.text}>Date: </Text>
                            {/* show current date in text field */}
                            <Text>{current_date}</Text>
                        </ListItem>
                        {/* Account */}
                        <ListItem onPress = {() => {this.toggleModal(1)}}>
                            <Text style={styles.text}>Account: </Text>
                            <TouchableOpacity>
                                <Text>{this.state.account}</Text>
                            </TouchableOpacity>
                        </ListItem>
                        {/* Category */}
                        <ListItem onPress = {() => {this.toggleModal(2)}}>
                            <Text style={styles.text}>Category: </Text>
                            <TouchableOpacity>
                                <Text>{this.state.category}</Text>
                            </TouchableOpacity>
                        </ListItem>
                        {/* Amount */}
                        <ListItem onPress={() => {this.toggleModal(3)}}>
                            <Text style={styles.text}>Amount: </Text>
                            <TouchableOpacity>
                                <Text>{this.state.amount} Rs.</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Content: </Text>
                            <Input type="text"/>
                        </ListItem>
                    </Card>
                    <Button block borderd success><Text style={styles.buttonText}>Save</Text></Button>
                    {/* Modal for account section */}
                    <Modal visible={this.state.visibleModal === 1} style={styles.bottomModal}>
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
                    {/* Modal for category section */}
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
                    {/* Modal for amount section */}
                    <Modal visible={this.state.visibleModal === 3} style={styles.bottomModal}>
                        <Header style={styles.headerTab}>
                            <StatusBar backgroundColor="#ff7f00"></StatusBar>
                            <Left>
                                <Text style={styles.text1}>Amount</Text>
                            </Left>
                            <Right>
                                <Icon type="Ionicons" name="close" style={styles.icon} onPress = {() => {this.toggleModal(null)}}></Icon>
                            </Right>
                        </Header>
                        {this.renderAmountContent()}
                    </Modal>
                </Content>
            </Container>
        );
    }
}