import React from 'react';
import DetalheContainer from "../containers/DetalheContainer";
import {colors} from "../resources/Colors";
import {Text} from 'react-native'

export default class DetalheScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            headerTitle: <Text style={{color: 'white', fontSize: 18}}>Voltar</Text>,
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0,},
            headerTintColor: '#ffffff'
        }
    }
    render() {
        return (
            <DetalheContainer navigation={this.props.navigation}/>
        );
    }
}
