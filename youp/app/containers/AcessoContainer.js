import React from 'react'
import { Text, StatusBar, View, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button'
import ConquistaModal from '../components/ConquistaModal'

export default class AcessoContainer extends React.Component {
    state = {
        email: '',
        senha: '',
        confirmaSenha: '',
        modalConquista: false
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
                    backgroundColor= {this.state.modalConquista ? 'black' : '#fff'}
                />
                <ConquistaModal closeModal={() => this.setState({modalConquista: false})} isVisible={this.state.modalConquista}/>
                <ScrollView>
                    <View style={{ marginTop: 24, padding: 20 }}>
                        <Text style={{ fontSize: 36, color: '#7504AE', fontFamily: 'Baloo-Regular' }}>Quase lá \0/</Text>
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
                        <Text style={{ fontSize: 18, fontFamily:'Lato-Bold', marginTop: 25 }}>Dados de acesso</Text>
                        <TextField
                            keyboardType="email-address"
                            label='E-mail'
                            value={this.state.email}
                            onChangeText={text => this.handleChange('email', text)}
                        />
                        <TextField
                            secureTextEntry
                            label='Senha'
                            value={this.state.cpf}
                            onChangeText={text => this.handleChange('senha', text)}
                        />
                        <TextField
                            secureTextEntry
                            label='Confirmar Senha'
                            value={this.state.confirmaSenha}
                            onChangeText={text => this.handleChange('confirmaSenha', text)}
                        />

                      
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 15 }}>
                            <Button onPress={() => this.setState({modalConquista: true})}>Criar Conta</Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}