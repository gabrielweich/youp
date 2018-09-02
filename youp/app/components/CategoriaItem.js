import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class CategoriaItem extends React.Component {
    render() {

        return (
            <View style={{ margin: 10 }}>
                <TouchableOpacity style={{
                    backgroundColor: this.props.color,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 82,
                    height: 60, borderRadius: 10, margin: 5, padding: 5
                }} onPress={() => this.props.select(this.props.id_categoria)}>
                    <Image source={this.props.image} resizeMode="center"/>
                </TouchableOpacity>
                {this.props.selected
                    ?
                    <View
                        style={{
                            marginBottom: 5,
                            borderRadius: 2,
                            marginTop: 2,
                            alignSelf: 'center',
                            height: 2,
                            opacity: 0.9,
                            width: "90%",
                            backgroundColor: this.props.color,
                        }}
                    />
                    : null
                }

            </View>
        )
    }

}

