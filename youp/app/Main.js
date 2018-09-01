import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from "./resources/Colors";
import HomeScreen from "./screens/HomeScreen";

const NavigationStack = isLogged => createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    TabNavigation: {
        screen: TabNavigation
    }
},
{
    initialRouteName: 'TabNavigation'
    // initialRouteName: 'Picture',
}
);

const TabNavigation = createBottomTabNavigator({
    Home: HomeScreen,
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-home`;
            }

            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: colors.blue,
        inactiveTintColor: colors.grey,
    },
});

TabNavigation.navigationOptions = ({ navigation }) => {
    const { routes, index } = navigation.state;
    const navigationOptions = {};

    if (routes[index].routeName === 'Home') {
        navigationOptions.title = 'YoUp';
    }
    return navigationOptions;
};

class Main extends React.PureComponent {

    render() {
        const Navigator = NavigationStack();
        return (
            <Navigator />
        );
    }
}


export default Main;
