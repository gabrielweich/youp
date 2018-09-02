import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const CategoriaItem = (props) => {
    //console.warn(id)
    console.warn(props.select)
    return (
        <View style={{ margin: 10 }}>
            <TouchableOpacity style={{
                backgroundColor: props.color,
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                height: 60, borderRadius: 10, margin: 5, padding: 5
            }} onPress={() => props.select(props.categoria)}>
                <Ionicons name={props.icon} size={50} color='#fff' />
            </TouchableOpacity>
            {props.selected
                ?
                <View
                    style={{
                        borderRadius: 2,
                        marginTop: 2,
                        alignSelf: 'center',
                        height: 4,
                        opacity: 0.9,
                        width: "80%",
                        backgroundColor: props.color,
                    }}
                />
                :null
            }

        </View>
    )
}

export default CategoriaItem