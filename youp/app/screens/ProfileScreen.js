import React from 'react';
import ShowProfileContainer from "../containers/ShowProfileContainer";
import {colors} from "../resources/Colors";
import {Text} from 'react-native'

export default class ProfileScreen extends React.PureComponent{
    static navigationOptions = () => {
        return {
            headerTitle: <Text style={{color: 'white', fontSize: 18}}>Voltar</Text>,
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0, marginTop: 15},
            headerTintColor: '#ffffff'
        }
    }
    render() {
        return (
            <ShowProfileContainer navigation={this.props.navigation}/>
        );
    }
}