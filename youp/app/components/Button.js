import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = (props) => (
    <TouchableOpacity style={{
        width: 250,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#68CFF1',
        padding: 10
    }} {...props}>
        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Lato-Regular' }}>
            {props.children}
        </Text>
    </TouchableOpacity>
)

export default Button