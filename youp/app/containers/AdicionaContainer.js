import React from 'react'
import { Text, StatusBar, View, TouchableOpacity, ScrollView } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button'
import BotaoAdicionaFoto from '../components/BotaoAddFoto';

export default class AdicionaContainer extends React.Component {
    state = {
        nome: '',
        descricao: ''
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
                        <Text style={{ fontSize: 36, color: '#7504AE', fontFamily: 'Baloo-Regular' }}>{"Criar evento <3"}</Text>

                        <TextField
                            label='Qual o nome da sua causa?'
                            value={this.state.nome}
                            onChangeText={text => this.handleChange('nome', text)}
                        />
                        <TextField
                            multiline
                            label='Nos conte mais sobre ela:'
                            value={this.state.descricao}
                            onChangeText={text => this.handleChange('descricao', text)}
                        />
                        <Text style={{fontSize: 15, color:'#9b9b9b', marginVertical: 20}}>Nos mande 3 fotos para que possamos conhecer ela melhor.</Text>
                        <View style={{flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between', flex: 1}}>
                            <BotaoAdicionaFoto />
                            <BotaoAdicionaFoto />
                            <BotaoAdicionaFoto />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 15 }}>
                            <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>Enviar Solicitação</Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}