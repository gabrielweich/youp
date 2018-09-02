import React from 'react'
import { View, Text, ImageBackground } from 'react-native'


export default class DetalheContainer extends React.Component {

    render() {
        const { name, date, description, uri } = this.props.navigation.state.params.projeto
        // console.warn(uri)
        return (
            <View>
                <ImageBackground
                    style={{ width: '100%', height: 200 }}
                    source={{ uri }}
                />
                <Text>{name}</Text>
                <Text>{date}</Text>

                <Text>{description}</Text>

            </View>
        )
    }
}