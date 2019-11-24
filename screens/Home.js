import React from 'react'
import {stylesheet ,Text, View, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {Header} from 'react-native-elements'
export default ({history}) => (
  <View>
   <Header
          
          leftComponent={{ icon: 'menu', color: '#fff' }}
        //  centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          //style={styles.input1}
        />
    <View style = {{width:250, height:50,marginLeft:60,marginTop:120}} >
          <Button title="Login as Teacher" onPress={() => Actions.push('tlogin')} />        
    </View>
        
      <View style = {{width:250, height:50,marginLeft:60,marginTop:40}} >
          <Button title="Login as Parent" onPress={() => Actions.push('plogin')} />        
      </View>
    
    
  </View>
); 

