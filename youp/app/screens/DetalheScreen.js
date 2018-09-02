import React from 'react';
import DetalheContainer from "../containers/DetalheContainer";
import {colors} from "../resources/Colors";

export default class DetalheScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            headerMode: 'none'
        }
    };

    render() {
        return (
            <DetalheContainer navigation={this.props.navigation}/>
        );
    }
}
