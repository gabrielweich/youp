import React from 'react';
import AcessoContainer from "../containers/AcessoContainer";

export default class AcessoScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <AcessoContainer navigation={this.props.navigation}/>
        );
    }
}
