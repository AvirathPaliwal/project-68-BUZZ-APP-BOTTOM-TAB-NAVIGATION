import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import instagram from './screens/Instagram'
import FackBook from './screens/Fackbook'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Header } from 'react-native-elements';
import  {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
      <View style={{flex:1}}>
      <Header
        backgroundColor={'#23049d'}
        leftComponent={{ icon: 'menu',size:30, color: '#ffdf6b' }}
       rightComponent={{ icon: 'home', size:30,color: '#ffdf6b'}}
        centerComponent={{text: 'Buzz App',style: { color: '#ffdf6b', fontSize: 30,fontWeight: 'bold' },
        }}/>
      <AppContaner />
      </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
  FackBook: { screen: FackBook},
  Instagram: { screen: instagram },
})
const AppContaner = createAppContainer(TabNavigator)