import React from 'react';
import HomeContainer from "../containers/HomeContainer";
import {colors} from "../resources/Colors";

export default class HomeScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            headerStyle: { backgroundColor: colors.white },
            headerTitle: 'YoUp',
            headerTintColor: colors.black,
        }
    };

    render() {
        return (
            <HomeContainer navigation={this.props.navigation}/>
        );
    }
}
