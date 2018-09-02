import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class CategoriaItem extends React.Component {
    //console.warn(id)
    render() {
        console.warn(this.props.selected)

        return (
            <View style={{ margin: 10 }}>
                <TouchableOpacity style={{
                    backgroundColor: this.props.color,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 82,
                    height: 60, borderRadius: 10, margin: 5, padding: 5
                }} onPress={() => this.props.select(this.props.categoria)}>
                    <Ionicons name={this.props.icon} size={50} color='#fff' />
                </TouchableOpacity>
                {this.props.selected
                    ?
                    <View
                        style={{
                            marginBottom: 5,
                            borderRadius: 2,
                            marginTop: 2,
                            alignSelf: 'center',
                            height: 4,
                            opacity: 0.9,
                            width: "80%",
                            backgroundColor: this.props.color,
                        }}
                    />
                    : null
                }

            </View>
        )
    }

}

