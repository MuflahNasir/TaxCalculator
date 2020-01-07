import React, {Component} from 'react';
import {StyleSheet,ScrollView , View, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Incomehead from './Incomehead';
import UnSalaried from './Unsalaried';
import Property from './Property';
import Business from './Business';
import Capital  from './Capital';
import Other from './Other';

class IncomeTax extends Component {

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
          button5: '#ffa245' };
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
    if(this.state.currentXOffset <= 806){
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
    if(this.state.currentXOffset == 806){
      this.setState({
        right: 0
      })
    }
    this.refs.scrollView.scrollTo({x: _currentXOffset, y: 0, animated: true})
  }

      renderElement() {
        if (this.state.val === 1) {
          return <Incomehead />;
        }
        else if(this.state.val === 2){
            return <UnSalaried />;
        }
        else if(this.state.val === 3){
            return <Property />;
        }
        else if(this.state.val === 4){
          return <Business />;
        }
        else if(this.state.val === 5){
          return <Capital />;
        }
        else if(this.state.val === 6){
          return <Other />;
        }
    }

      render(){
        var yourPicture = require ('./assets/right.png');
        var left = require ('./assets/left.png');
             return(
                <View >
                <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent:'center'}}>
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
                        button5: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Tax on Salaried Person</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button1}]}
                      onPress={() => this.setState({ val: 2,
                        button: '#ffa245',
                        button1: '#ff7f00',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245' })}>
                      <Text style={{ color: '#ffffff' }}>Tax on UnSalaried Person</Text>
                    </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button2}]}
                      onPress={() => this.setState({ val: 3,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ff7f00',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Tax on Property</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button3}]}
                      onPress={() => this.setState({ val: 4,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ff7f00',
                        button4: '#ffa245',
                        button5: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Corporate Tax on Business</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button4}]}
                      onPress={() => this.setState({ val: 5,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ff7f00',
                        button5: '#ffa245' })}>
                    <Text style={{ color: '#ffffff' }}>Tax on Capital Gain</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.button, {backgroundColor: this.state.button5}]}
                      onPress={() => this.setState({ val: 6,
                        button: '#ffa245',
                        button1: '#ffa245',
                        button2: '#ffa245',
                        button3: '#ffa245',
                        button4: '#ffa245',
                        button5: '#ff7f00' })}>
                    <Text style={{ color: '#ffffff' }}>Tax on Other Sources</Text>
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
                </View>
             );
        }
}
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    marginTop: 90,
    },
    inner: {
      padding: 24,
      justifyContent: "flex-end",
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

export default IncomeTax