import React from 'react';
import HomeContainer from "../containers/HomeContainer";
import {colors} from "../resources/Colors";

export default class HomeScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            headerMode: 'none'
        }
    };

    render() {
        return (
            <HomeContainer navigation={this.props.navigation}/>
        );
    }
}
