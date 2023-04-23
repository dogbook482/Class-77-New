import * as React from 'react-native';
import Home from './screens/homeScreen';
import ISSLocation from './screens/ISSLocationScreen';
import Meteor from './screens/meteorScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='ISSLocation' component={ISSLocation}/>
          <Stack.Screen name='MeteorScreen' component={Meteor}/>    
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
 
