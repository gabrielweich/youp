import React from 'react'
import ProjetoItem from '../components/ProjetoItem'
import CategoriaItem from '../components/CategoriaItem'
import { AppRegistry, Text, StyleSheet, Image } from 'react-native';
import { View, TextInput, Button, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class TextInANest extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <ScrollView>        
        <Text style={styles.secondText} onPress={this.onPressTitle}>
          TESTE TESTE 2
        </Text>
        <Image style={{ alignSelf: 'center', justifyContent: 'center' }} resizeMode="contain" source={require('../images/show-profile-01.png')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Courier',
    color:'#7404AC'
  },
  secondText: {
    fontSize: 25,
    fontWeight: 'normal',
    fontFamily: 'Courier',
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'Courier',
    color: 'grey'
    
  },
});


