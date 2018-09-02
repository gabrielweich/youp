import React from 'react'
import { Text, StatusBar, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CadastroContainer extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor='#fff'
                />
                <View style={{ marginTop: 24, padding: 20 }}>
                    <Text style={{ fontSize: 36, color: '#7504AE', fontWeight: 'bold' }}>Criar conta :)</Text>
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
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 25}}>Dados Pessoais</Text>
                </View>
            </View>
        )
    }
}