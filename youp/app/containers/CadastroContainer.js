import React from 'react'
import { Text, StatusBar, View, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button'

export default class CadastroContainer extends React.Component {
    state = {
        nome: '',
        cpf: '',
        dataNascimento: '',
        genero: '',
        telefone: ''
    }

    handleChange = (name, text) => {
        this.setState({
            [name]: text,
        });
    };

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor='#fff'
                />
                <ScrollView>
                    <View style={{ marginTop: 24, padding: 20 }}>
                        <Text style={{ fontSize: 36, color: '#7504AE', fontFamily: 'Baloo-Regular' }}>Criar conta :)</Text>
                        <TouchableOpacity style={{
                            marginTop: 25,
                            borderWidth: 2,
                            borderColor: 'rgba(0,0,0,0.15)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            backgroundColor: '#fff',
                            borderRadius: 100,
                        }}>
                            <Ionicons name='ios-camera' size={50} color='rgba(0,0,0,0.15)' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontFamily:'Lato-Bold', marginTop: 15 }}>Dados Pessoais</Text>
                        <TextField
                            label='Nome'
                            value={this.state.nome}
                            onChangeText={text => this.handleChange('nome', text)}
                        />
                        <TextField
                            keyboardType="numeric"
                            maxLength={11}
                            label='CPF'
                            value={this.state.cpf}
                            onChangeText={text => this.handleChange('cpf', text)}
                        />
                        <TextField
                            label='Data de nascimento'
                            value={this.state.dataNascimento}
                            onChangeText={text => this.handleChange('dataNascimento', text)}
                        />
                        
                        <TextField
                            keyboardType="numeric"
                            label='Telefone'
                            value={this.state.telefone}
                            onChangeText={text => this.handleChange('telefone', text)}
                        />
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 15 }}>
                            <Button onPress={() => this.props.navigation.navigate('AcessoScreen')}>Próximo</Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}