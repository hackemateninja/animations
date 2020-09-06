import React from "react"
import {
  Bezier,
  Decay,
  Drag,
  Home,
  Pan,
  Pinch,
  Shape,
  Slider,
  Spring,
  SVG,
  Swiping,
  Timing,
  Transition, Trigonometry,
  UseTransition,
  Values
} from "../screens";
import {COLORS} from "../constants";
import {StatusBar} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions
} from '@react-navigation/stack';


const Stack = createStackNavigator();
const options: StackNavigationOptions = {
  headerStyle:{
    backgroundColor: COLORS.black,
  },
  headerTintColor: COLORS.yellow,
  headerTitleStyle: {
    fontFamily: 'Inter_900Black',
    fontSize: 18
  },
  headerTitleAlign: 'center',
}


export default ()=>{
  StatusBar.setBarStyle('light-content')
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='modal'
        screenOptions={{...options}}>
        <Stack.Screen
          name='Home'
          options={{
            title: 'Animations react native',
          }}
          component={Home}
        />
        <Stack.Screen
          name='Values'
          options={{
            title: 'Values and clocks',
          }}
          component={Values}
        />
        <Stack.Screen
          name='Transition'
          options={{
            title: 'Transitions',
          }}
          component={Transition}
        />
        <Stack.Screen
          name='UseTransition'
          options={{
            title: 'Use Transitions',
          }}
          component={UseTransition}
        />
        <Stack.Screen
          name='Timing'
          options={{
            title: 'Timing',
          }}
          component={Timing}
        />
        <Stack.Screen
          name='Pan'
          options={{
            title: 'Pan gesture',
          }}
          component={Pan}
        />
        <Stack.Screen
          name='Decay'
          options={{
            title: 'Decay',
          }}
          component={Decay}
        />
        <Stack.Screen
          name='Swiping'
          options={{
            title: 'Swiping',
          }}
          component={Swiping}
        />
        <Stack.Screen
          name='Spring'
          options={{
            title: 'Dynamic Springs',
          }}
          component={Spring}
        />
        <Stack.Screen
          name='Draw'
          options={{
            title: 'Drag To Sort',
          }}
          component={Drag}
        />
        <Stack.Screen
          name='Pinch'
          options={{
            title: 'Pinch gesture',
          }}
          component={Pinch}
        />
        <Stack.Screen
          name='SVG'
          options={{
            title: 'SVG animations',
          }}
          component={SVG}
        />
        <Stack.Screen
          name='Trigonometry'
          options={{
            title: 'Trigonometry',
          }}
          component={Trigonometry}
        />
        <Stack.Screen
          name='Slider'
          options={{
            title: 'Circular Slider',
          }}
          component={Slider}
        />
        <Stack.Screen
          name='Bezier'
          options={{
            title: 'Bezier Curves',
          }}
          component={Bezier}
        />
        <Stack.Screen
          name='Shape'
          options={{
            title: 'Shape morphing',
          }}
          component={Shape}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
