import React, { Component } from 'react';
import { Alert,Text, Button, TextInput, View, StyleSheet, ActionSheetIOS } from 'react-native';
import {Header} from 'react-native-elements';
import {Actions}from 'react-native-router-flux'

export default class Plogin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  } 

 onback() {
    Alert.alert('Credentials');
//        Actions.popTo('home');
}
  render() {
    return (
      <View >
  
  <Header
          
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: ' LOGIN', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          //style={styles.input1}
        />
         <View style = {{width:60, height:50,marginLeft:10,marginTop:10}} >
        <Button 
        
        title={"Home"}
        style={styles.input}
        onPress={()=> Actions.push('home')}
        />
        </View>
         <View style = {{width:60, height:50,marginLeft:70,marginTop:30}} >
        <TextInput
          
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'User Name'}
          style={styles.input}         
          
        />
        </View>  
        <View style = {{width:60, height:50,marginLeft:70,marginTop:10}} >
    

        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          
          
        />

        </View>
       
        <View style = {{width:220, height:50,marginLeft:60,marginTop:20}} >
          <Button
          title={"Login"}
         //onPress={()=> Actions.push('home')}
         onPress={this.onLogin.bind(this)}
          />
          </View>
        
        
        
          
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop:80,
  },
  container1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop:300,
  },
  input: {
    width: 200,
    height: 44,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 7,
    marginTop: 1,
  },
  input1:{
    height: 20,
    flex: 1,
    backgroundColor: "#FFBB34",
    borderColor: "#555555",
    borderWidth: 20,
    borderRadius: 0,
    marginTop: 200,
    justifyContent: "flex-start"
  },
});
