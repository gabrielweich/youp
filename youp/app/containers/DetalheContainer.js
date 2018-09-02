import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


export default class DetalheContainer extends React.Component {

    render() {
        const { name, date, description, uri, category } = this.props.navigation.state.params.projeto
        // console.warn(uri)
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor='rgba(0, 0, 0,0)'
                />
                <ImageBackground
                    imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',//TODO: Importate para que la imagen abarque toda la pantalla
                        backgroundColor: 'transparent'
                    }} source={{ uri }}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0,0.3)', 'rgba(0, 0, 0,0.3)']}
                        style={{
                            borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                            flex: 1,
                            paddingTop: 50,
                            paddingHorizontal: 20,
                            paddingVertical: 20,
                            overflow: 'visible',
                            alignItems: 'center',
                            alignSelf: 'stretch',
                        }}
                    >
                    </LinearGradient>
                </ImageBackground>
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
                            borderRadius: 12,
                            backgroundColor: '#68CFF1',
                            padding: 10
                        }}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>
                                Quero Participar!

                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        )
    }
}