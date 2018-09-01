import React from 'react'
import { View, Text, Image } from 'react-native'

const ProjetoItem = ({ uri, name, description, date }) => {
    console.warn(uri)
    return (
        <View>
            <Image
                style={{
                    alignSelf: 'center',
                    height: 150,
                    width: '90%',
                    borderWidth: 1,
                    borderRadius: 5
                }}
                source={require('../images/criancas.jpg')}
                resizeMode="cover"
            />
        </View>
    )
}

export default ProjetoItem;
