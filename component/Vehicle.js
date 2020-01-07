import React, {Component} from 'react';
import {StyleSheet,ScrollView , View, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Registration from './Registration';
import Luxury from './Luxury';
import TransferFee from './TransferFee';
import Token from './TokenTax';
import VehicleIncome  from './VehicleIncome';
import Professional from './Professional';
import TaxImported from './TaxImported';
import PostTransaction from './PostTransaction';
import Witholding from './Witholding';
import MotorTax from './MotorTax';
import TextTicker from 'react-native-text-ticker'

  
class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = { val: 1,
          scrollViewWidth:0,
          currentXOffset:0,
          visible: 0,
          right : 1,
          button: '#ff7f00',
          button1: '#ffa245',
          button2: '#ffa245',
          button3: '#ffa245',
          button4: '#ffa245',
          button5: '#ffa245',
          button6: '#ffa245',
          button7: '#ffa245',
          button8: '#ffa245',
          button9: '#ffa245' };
      }
      
  _handleScroll = (event) => {
    console.log('currentXOffset =', event.nativeEvent.contentOffset.x);
    newXOffset = event.nativeEvent.contentOffset.x
    this.setState({currentXOffset:newXOffset})
  }

  leftArrow = () => {
    eachItemOffset = this.state.scrollViewWidth / 10;
    _currentXOffset =  this.state.currentXOffset - eachItemOffset;
    if(this.state.currentXOffset == 0){
      this.setState({
        visible: 0
      })
    }
    if(this.state.currentXOffset <= 1296){
      this.setState({
        right: 1
      })
    }
    this.refs.scrollView.scrollTo({x: _currentXOffset, y: 0, animated: true})
  }

  rightArrow = () => {
    eachItemOffset = this.state.scrollViewWidth / 10;
    _currentXOffset =  this.state.currentXOffset + eachItemOffset;
    if(this.state.currentXOffset <= 0){
      this.setState({
        visible: 1
      })
    }
    if(this.state.currentXOffset == 1296){
      this.setState({
        right: 0
      })
    }
    this.refs.scrollView.scrollTo({x: _currentXOffset, y: 0, animated: true})
  }

      renderElement() {
        if (this.state.val === 1) {
          return <Registration />;
        }
        else if(this.state.val === 2){
            return <Luxury />;
        }
        else if(this.state.val === 3){
            return <TransferFee />;
        }
        else if(this.state.val === 4){
          return <Token />;
        }
        else if(this.state.val === 5){
          return <VehicleIncome />;
        }
        else if(this.state.val === 6){
          return <Professional />;
        }
        else if(this.state.val === 7){
          return <TaxImported />;
        }
        else if(this.state.val === 8){
          return <PostTransaction />;
        }
        else if(this.state.val === 9){
          return <Witholding />;
        }
        else if(this.state.val === 10){
          return <MotorTax />;
        }
    }

      render(){
        var yourPicture = require ('./assets/right.png');
        var left = require ('./assets/left.png');
             return(
                <View style={styles.container}>
                  <TextTicker
                    style={{ fontSize: 12 }}
                    duration={3000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                  >
                  This Excies duty on Vehicle is only applicable in Punjab Province.
                  </TextTicker>
                <View style={{ flexDirection: 'row', justifyContent:'center', marginTop: 10}}>
                <View style={{ opacity: this.state.visible}}>
                <TouchableOpacity
                  style={{alignItems: 'flex-start', paddingTop:10}}
                  onPress={this.leftArrow}
                >

                  <Image style={{width: 30, height: 20}}
                    source={left}></Image>

                </TouchableOpacity>
                </View>

                <ScrollView 
                    horizontal={true}
                    pagingEnabled={true}
                    ref="scrollView"
                    onContentSizeChange={(w, h) => this.setState({scrollViewWidth:w})}
                    scrollEventThrottle={16}
                    onScroll={this._handleScroll}>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button}]}
                      onPress={() => this.setState({ val: 1,
                        button: '#ff7f00',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245',
                        button6: '#ffa245',
                        button7: '#ffa245',
                        button8: '#ffa245',
                        button9: '#ffa245'})}>
                    <Text style={{ color: '#ffffff' }}>Rate of New Registration</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button1}]}
                      onPress={() => this.setState({ val: 2,
                      button: '#ffa245',
                      button1: '#ff7f00',
                      button2: '#ffa245',
                      button3: '#ffa245',
                      button4: '#ffa245',
                      button5: '#ffa245',
                      button6: '#ffa245',
                      button7: '#ffa245',
                      button8: '#ffa245',
                      button9: '#ffa245'  })}>
                      <Text style={{ color: '#ffffff' }}>Luxury Tax</Text>
                    </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button2}]}
                      onPress={() => this.setState({ val: 3,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ff7f00',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245',
                        button6: '#ffa245',
                        button7: '#ffa245',
                        button8: '#ffa245',
                        button9: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Rate of Transfer Fee</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button3}]}
                      onPress={() => this.setState({ val: 4,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ff7f00',
                        button4: '#ffa245',
                        button5: '#ffa245',
                        button6: '#ffa245',
                        button7: '#ffa245',
                        button8: '#ffa245',
                        button9: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Token Tax</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button4}]}
                      onPress={() => this.setState({ val: 5,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ff7f00',
                        button5: '#ffa245',
                        button6: '#ffa245',
                        button7: '#ffa245',
                        button8: '#ffa245',
                        button9: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Income Tax</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button5}]}
                      onPress={() => this.setState({ val: 6,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ff7f00',
                        button6: '#ffa245',
                        button7: '#ffa245',
                        button8: '#ffa245',
                        button9: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Professional Tax</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button6}]}
                      onPress={() => this.setState({ val: 7,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245',
                        button6: '#ff7f00',
                        button7: '#ffa245',
                        button8: '#ffa245',
                        button9: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Tax on Imported Cars</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button7}]}
                      onPress={() => this.setState({ val: 8,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245',
                        button6: '#ffa245',
                        button7: '#ff7f00',
                        button8: '#ffa245',
                        button9: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Rate of other Post Transaction</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button8}]}
                      onPress={() => this.setState({ val: 9,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245',
                        button6: '#ffa245',
                        button7: '#ffa245',
                        button8: '#ff7f00',
                        button9: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Rates of With Holding Tax</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button9}]}
                      onPress={() => this.setState({ val: 10,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245',
                        button6: '#ffa245',
                        button7: '#ffa245',
                        button8: '#ffa245',
                        button9: '#ff7f00' })}>
                    <Text style={{ color: '#ffffff' }}>Motor Tax</Text>
                  </TouchableOpacity>
                </ScrollView>
                <View style={{ opacity: this.state.right}}>
                <TouchableOpacity
                  style={{alignItems: 'flex-end', paddingTop:10}}
                  onPress={this.rightArrow}>

                  <Image style={{width: 30, height: 20}}
                  source={yourPicture}></Image>

                </TouchableOpacity>
                </View>
                </View>
                <View style={{ backgroundColor: '#ffffff' }}>
                  {this.renderElement()}
                </View>
                </View>
             );
        }
}
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    marginTop: 70
    },
    paragraph: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical:10,
    paddingHorizontal:20,
    margin: 2,
    borderRadius: 100
    },
});


export default Vehicle