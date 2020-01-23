import React from 'react';
import Login from '../login/login';
import Splash from './splash';
export default class SplashScreen extends React.Component {
  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000) //TIME OF WAITING
  }
  render() {
    return (
      <Splash />
    )
  }
}
