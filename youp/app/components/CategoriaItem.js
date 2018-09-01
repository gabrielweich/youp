import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const CategoriaItem = ({ icon, name, selected }) => {
    return (
        <View style={{margin: 10}}>
            <TouchableOpacity style={{
            borderColor: 'gray', alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 70, borderWidth: 1, borderRadius: 100, margin: 5, padding: 5
        }}>
                <Ionicons name={icon} size={50} color={'blue'} />
            </TouchableOpacity>
            <Text style={{textAlign: 'center', alignSelf: 'center'}}>{name}</Text>
        </View>
    )
}

export default CategoriaItem