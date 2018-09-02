import React from 'react';
import HomeContainer from "../containers/HomeContainer";

export default class HomeScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            headerMode: 'none',
            header: null
        }
    };

    render() {
        return (
            <HomeContainer navigation={this.props.navigation}/>
        );
    }
}
