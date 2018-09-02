import React from 'react'
import { View, Text, ImageBackground } from 'react-native'


export default class DetalheContainer extends React.Component {

    render() {
        const { name, date, description, uri, category } = this.props.navigation.state.params.projeto
        // console.warn(uri)
        return (
            <View>
                <ImageBackground
                    style={{ width: '100%', height: 200 }}
                    source={{ uri }}
                />
                <View style={{padding: 20}}>
                    <Text style={{fontWeight: 'bold'}}>{category.toUpperCase()}</Text>
                    <Text style={{fontSize: 30}}>{name}</Text>

                    <Text>{description}</Text>
                </View>
                

            </View>
        )
    }
}