import React from 'react'
import {StyleSheet ,Text, View} from 'react-native'
//import {NativeRouter,Switch,Route,Router} from 'react-router-native'
import Home from './screens/Home'
import Plogin from './screens/ParentsLogin'
import Tlogin from './screens/TeacherLogin'
import { Router,Stack, Scene } from 'react-native-router-flux'
export default class App extends React.Component{
  render(){
    return(
        <Router>
          <View style = {styles.Container}>
           
            <Stack key="root">
              
              <Scene key="home" component={Home} title="Home" />
              <Scene key="plogin" component={Plogin} title="ParentsLogin" />
              <Scene key="tlogin" component={Tlogin} title="TeachersLogin" />
              
            </Stack>
          </View>
        </Router>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#afff',
    alignItems:'center',
    justifyContent:'center',
  },


});