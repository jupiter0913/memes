import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../screens/login"
import Signup from "../screens/signup"

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
},
  {
    initialRouteName: "Login",
    headerMode: "none",
    swipeEnabled: false
  });
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;