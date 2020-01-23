import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from "../screens/splash";
import Login from "../screens/login";
import Signup from "../screens/signup";

const MainNavigator = createStackNavigator({
  Splash: {screen: Splash},
  Login: { screen: Login },
  Signup: { screen: Signup },
},
  {
    initialRouteName: "Splash",
    headerMode: "none",
    swipeEnabled: false
  });
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;