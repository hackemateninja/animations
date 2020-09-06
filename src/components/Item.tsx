import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {TouchableOpacity} from "react-native-gesture-handler";
import {
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";
import {COLORS, FONTS} from "../constants";

const styles = StyleSheet.create({
  Description:{
    color: COLORS.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: FONTS.regular,
  },
  Image:{
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  Gradient: {
    flex: 1,
  },
  Item:{
    width: '100%',
    height: 200,
    overflow: "hidden",
  },
  Title:{
    fontSize: 26,
    color: COLORS.white,
    textAlign: 'center',
    marginVertical: '8%',
    fontFamily: FONTS.bold
  },
})

interface ItemType  {title:string, description: string, onPress: any, image:any}

export default (props: ItemType )=>{
  const {image, onPress, title, description} = props;
  return(
    <TouchableOpacity
      style={styles.Item}
      onPress={onPress}>
      <ImageBackground
        resizeMode={'cover'}
        style={styles.Image}
        source={image}>
        <LinearGradient
          style={styles.Gradient}
          colors={COLORS.gradientCard}>
          <Text style={styles.Title}>
            {title}
          </Text>
          <Text style={styles.Description}>
            {description}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

