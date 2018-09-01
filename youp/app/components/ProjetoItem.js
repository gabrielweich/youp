import React from 'react'
import { View, Text } from 'react-native'

const ProjetoItem = ({ url, name, description, date }) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>Data: {date}</Text>
        </View>
    )
}

export default ProjetoItem;
