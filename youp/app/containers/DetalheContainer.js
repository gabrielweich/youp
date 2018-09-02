import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'


export default class DetalheContainer extends React.Component {

    render() {
        const { name, date, description, uri, category } = this.props.navigation.state.params.projeto
        // console.warn(uri)
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />
                <ImageBackground
                    style={{ width: '100%', height: 200 }}
                    source={{ uri }}
                />
                <View style={{ padding: 20, flex: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>{category.toUpperCase()}</Text>
                    <Text style={{ fontSize: 30, color: "#7504AE" }}>{name}</Text>

                    <View style={{ marginTop: 30 }}>
                        <Text>{description}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            width: 250,
                            marginBottom: 10,
                            alignItems: 'center',
                            borderRadius: 10,
                            backgroundColor: '#68CFF1',
                            padding: 10
                        }}>
                            <Text style={{ color: '#fff' }}>
                                Quero Participar!

                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        )
    }
}