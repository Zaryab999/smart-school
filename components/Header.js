import {react} from 'react';
import {Text,View,Header} from 'react-native';
 
const Header=(PROPS)=>{
    return(
        <View>
            <Header>
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={ <Text >{title.props}, color: '#fff'</Text> }
            rightComponent={{ icon: 'home', color: '#fff' }}
            </Header>
        </View>    
        );
}
/*
style: { color: '#fff' }
*/