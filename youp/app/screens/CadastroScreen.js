import React from 'react';
import CadastroContainer from "../containers/CadastroContainer";

export default class CadastroScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <CadastroContainer navigation={this.props.navigation}/>
        );
    }
}
