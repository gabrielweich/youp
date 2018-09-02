import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from "./resources/Colors";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from './screens/ProfileScreen'
import DetalheScreen from './screens/DetalheScreen';
import CadastroScreen from './screens/CadastroScreen';
import AcessoScreen from './screens/AcessoScreen';
import AdicionaScreen from './screens/AdicionaScreen';

const NavigationStack = isLogged => createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    DetalheScreen: {
        screen: DetalheScreen
    },
    CadastroScreen: {
        screen: CadastroScreen
    },
    AcessoScreen: {
        screen: AcessoScreen
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
    Adiciona: AdicionaScreen,
    Perfil: ProfileScreen
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch(routeName){
                case 'Home': iconName = 'ios-home'; break;
                case 'Adiciona': iconName = 'md-add'; break;
                case 'Perfil': iconName = 'ios-person'; break;
                default: iconName = 'ios-home';
            }

            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        showLabel: false,
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
