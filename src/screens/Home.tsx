import React from "react";
import {ScrollView} from "react-native-gesture-handler";
import {StyleSheet} from "react-native";
import {Item} from "../components";
import {COLORS} from "../constants";

const styles = StyleSheet.create({
  List:{
    backgroundColor:COLORS.black,
  }
})
export default ({navigation}: any)=>{
  return (
    <ScrollView style={styles.List}>
      <Item
        title={'Values and clocks'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/clock.png')}
        onPress={()=>{navigation.navigate('Values')}}
      />
      <Item
        title={'Transitions'}
        description={'Transitions with react reanimated'}
        image={require('../../assets/images/transition.jpg')}
        onPress={()=>{navigation.navigate('Transition')}}
      />
      <Item
        title={'Use transition'}
        description={'Transitions with hooks'}
        image={require('../../assets/images/usetransition.jpg')}
        onPress={()=>{navigation.navigate('UseTransition')}}
      />
      <Item
        title={'Timing'}
        description={'Timing and examples'}
        image={require('../../assets/images/timing.jpg')}
        onPress={()=>{navigation.navigate('Timing')}}
      />
      <Item
        title={'Pan gesture'}
        description={'Pan gesture with Gesture detector'}
        image={require('../../assets/images/gesture.jpg')}
        onPress={()=>{navigation.navigate('Pan')}}
      />
      <Item
        title={'Decay'}
        description={'Decay examples'}
        image={require('../../assets/images/decay.jpg')}
        onPress={()=>{navigation.navigate('Decay')}}
      />
      <Item
        title={'Swiping'}
        description={'Swiping and tinder example'}
        image={require('../../assets/images/swipe.jpg')}
        onPress={()=>{navigation.navigate('Swiping')}}
      />
      <Item
        title={'Dynamic Springs'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/spring.jpg')}
        onPress={()=>{navigation.navigate('Spring')}}
      />
      <Item
        title={'Drag to sort'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/sort.jpg')}
        onPress={()=>{navigation.navigate('Drag')}}
      />
      <Item
        title={'Pinch gesture'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/pinch.jpg')}
        onPress={()=>{navigation.navigate('Pinch')}}
      />
      <Item
        title={'SVG animations'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/svg.jpg')}
        onPress={()=>{navigation.navigate('SVG')}}
      />
      <Item
        title={'Trigonometry'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/trigonometry.jpg')}
        onPress={()=>{navigation.navigate('Trigonometry')}}
      />
      <Item
        title={'Circular Slider'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/circular.jpg')}
        onPress={()=>{navigation.navigate('Slider')}}
      />
      <Item
        title={'Bezier Curves'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/bezier.jpg')}
        onPress={()=>{navigation.navigate('Bezier')}}
      />
      <Item
        title={'Shape Morphing'}
        description={'Values and clocks with their identities example'}
        image={require('../../assets/images/shape.jpg')}
        onPress={()=>{navigation.navigate('Shape')}}
      />
    </ScrollView>
  )
}
