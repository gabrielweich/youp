import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const BotaoAdicionaFoto = (props) => (
    <TouchableOpacity style={{
        borderColor: 'gray',
        borderWidth: 1,
        width: 80,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 8
    }} {...props}>
        <Ionicons name='ios-add' size={60} color='gray' />

    </TouchableOpacity>
)

export default BotaoAdicionaFoto