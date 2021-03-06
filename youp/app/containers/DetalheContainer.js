import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button'

export default class DetalheContainer extends React.Component {

    render() {
        const { name, date, description, uri, uriDetalhe, uriProfile, category } = this.props.navigation.state.params.projeto
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
                    }} source={{ uri:uriDetalhe }}>
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
                <ScrollView>
                    <View style={{ padding: 20, flex: 1 }}>
                        <Text style={{ fontFamily: 'Lato-Bold' }}>{category.toUpperCase()}</Text>
                        <Text style={{ fontSize: 30, color: "#7504AE", fontFamily: 'Baloo-Regular' }}>{name}</Text>
                        <Image style={{ alignSelf: 'flex-end',marginTop: 10, width: 100, height: 60, justifyContent: 'flex-end', position: 'absolute' }} resizeMode="contain"  source={{uri:uriProfile}} />
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 20, color: '#000', fontFamily: 'Lato-Light' }}>{description}</Text>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 17, color: '#000', fontFamily: 'Lato-Light', textAlign: 'right' }}>{date}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button onPress={() => this.props.navigation.navigate('CadastroScreen')}>Quero participar!</Button>
                        </View>
                    </View>
                </ScrollView>


            </View>
        )
    }
}