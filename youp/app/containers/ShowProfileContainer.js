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
      <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>          
        <Image style={{ alignSelf: 'center', marginTop: 15 }} resizeMode="contain" source={require('../images/show-profile-04.png')} />
        <Text style={styles.profileName} onPress={this.onPressTitle}>
          Letícia
        </Text>
        <Text style={styles.profileCity} onPress={this.onPressTitle}>
          PORTO ALEGRE / RS
        </Text>
        <Image style={{ alignSelf: 'center', width: '90%', marginTop: 10, marginBottom: 10 }} resizeMode="contain" source={require('../images/show-profile-01.png')} />
        <Image style={{ alignSelf: 'center', width: '90%', marginBottom: 10 }} resizeMode="contain" source={require('../images/show-profile-02.png')} />
        <Image style={{ alignSelf: 'center', width: '90%', marginBottom: 10 }} resizeMode="contain" source={require('../images/show-profile-03.png')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  profileName: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: 'Arial',
    color:'#ACACAC',
    alignSelf: 'center'
  },
  profileCity: {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Arial',
    color:'#ACACAC',
    alignSelf: 'center'
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'Courier',
    color: 'grey'
    
  },
});


