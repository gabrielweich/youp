import React from 'react'
import { View, Text, Image } from 'react-native'

const ProjetoItem = ({ uri, name, description, date }) => {

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
                source={{uri}}
                resizeMode="cover"
            />
        </View>
    )
}

export default ProjetoItem;
