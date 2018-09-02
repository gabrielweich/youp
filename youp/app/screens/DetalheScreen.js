import React from 'react';
import DetalheContainer from "../containers/DetalheContainer";
import {colors} from "../resources/Colors";
import {Text} from 'react-native'

export default class DetalheScreen extends React.PureComponent {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{color: 'white', fontSize: 18, fontFamily: 'Lato-Regular'}}>Voltar</Text>,
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0, marginTop: 15},
            headerTintColor: '#ffffff'
        }
    }
    render() {
        return (
            <DetalheContainer navigation={this.props.navigation}/>
        );
    }
}
