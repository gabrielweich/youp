import React from 'react'
import ProjetoItem from '../components/ProjetoItem'
import CategoriaItem from '../components/CategoriaItem'
import { AppRegistry, Text, StyleSheet, Image } from 'react-native';
import { View, TextInput, Button, ScrollView } from 'react-native';



export default class TextInANest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Criar conta :)",
    };
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}
        </Text>
        
        <Text style={styles.secondText} onPress={this.onPressTitle}>
          Dados pessoais:
        </Text>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
          Nome:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(nome) => this.setState({nome})}
            />
        </View>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
          Data de nascimento:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(data) => this.setState({data})}
            />
        </View>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
          CEP:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(cep) => this.setState({cep})}
            />
        </View>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
          Endereço:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(endereco) => this.setState({endereco})}
            />
        </View>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
          E-mail:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(email) => this.setState({email})}
            />
        </View>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
          Telefone:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(telefone) => this.setState({telefone})}
            />
        </View>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
         Senha:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(senha) => this.setState({senha})}
            />
        </View>
        <Text style={styles.bodyText} onPress={this.onPressTitle}>
         Confirme sua senha:
        </Text>
        <View style={{ height:60 }}>
            <TextInput 
                style={{ flex:1, backgroundColor: '#ededed' }} 
                onChangeText={(confirma_senha) => this.setState({confirma_senha})}
            />
        </View>
        <View style={{ height:60 }}>
            <Button 
            title="Salvar"
                            style={{ flex:1, backgroundColor: '#ededed' }} 
                onPress={()=>{console.log("clicked");}}
            />
        </View>
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


