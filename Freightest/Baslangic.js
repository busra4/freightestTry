import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Router from './Router.js';
import LoginPage from "./src/pages/LoginSign/LoginPage/LoginPage.js";
import SignPageConst from "./src/pages/LoginSign/SignPage/SignPageConst.js";
import MainPage from "./src/pages/Main/MainPage.js";
import DenemePage from "./src/pages/denemePage/denemePage.js";

const AppNavigator = createStackNavigator(
    {
        Router:{screen:Router},
        LoginPage:{screen: LoginPage},
        SignPageConst:{screen: SignPageConst},
        MainPage:{screen: MainPage},
        Deneme:{screen: DenemePage},
    },
    {
        initialRoutedName: 'Router',
        headerMode:'none'
    }
);

export default createAppContainer(AppNavigator);