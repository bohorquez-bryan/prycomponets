/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {YellowBox} from 'react-native';
import {createDrawerNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Page1 from './Page1'
import Page2 from './Page2'

//YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const AppNavigator = createStackNavigator({
  Page1: {screen: Page1},
  Page2: {screen: Page2},
})

/*const BottomNavigator = createBottomTabNavigator ({
  Page1: {screen: Page1},
  Page2: {screen: Page2},
},
{
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused}) => {
      const {routeName} = navigation.state
      let icon;
      if(routeName === 'Page1') {
        icon = focused ? icons.homeFocused : icons.home
      }
      else if (routeName === 'Page2') {
        icon = focused ? icons.userFocused : icons.user
      }

      return <Image source={icon} style={{width: 20, height: 20}} />

    }

  })
}
)

const SideMenu = createDrawerNavigator({
  Page1: {screen: Page1, navigationOptions: {
    drawerIcon: ({item}) => (
      <Image source={icons.home} style={{width: 20, height: 20}} />
    )
  } },
  'Usuario': {screen: Page2, navigationOptions: {
    drawerIcon: ({item}) => (
      <Image source={icons.user} style={{width:20, height: 20}}/>
    )
  } }
},
{
  drawerPosition: 'right',
  drawerWidth: Dimensions.get('window').width * 0.80,
  drawerBackgroundColor: '#FFFF21'
})*/

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  
});
