import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from "./resources/Colors";
import HomeScreen from "./screens/HomeScreen";
import RankingScreen from "./screens/RankingScreen"
import ProfileScreen from './screens/ProfileScren'

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
    Ranking: RankingScreen,
    Perfil: ProfileScreen
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch(routeName){
                case 'Home': iconName = 'ios-home'; break;
                case 'Ranking': iconName = 'ios-trophy'; break;
                case 'Perfil': iconName = 'ios-person'; break;
                default: iconName = 'ios-home';
            }

            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: colors.youp,
        inactiveTintColor: colors.grey,
        style: {
            backgroundColor: '#fff',
        },
    },
});

TabNavigation.navigationOptions = ({ navigation }) => {
    const { routes, index } = navigation.state;
    const navigationOptions = {header: null};

    
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
