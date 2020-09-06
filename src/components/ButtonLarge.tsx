import React from "react";
import {Text, StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {COLORS, FONTS, STYLES} from "../constants";

interface ButtonLargeType{
  title: string,
  onPress: any
}

const styles = StyleSheet.create({
  button:{
    width: '100%',
    height: 70,
    padding: 8,
    backgroundColor: COLORS.red,
    ...STYLES.center
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 26
  }
})
export default ({title, onPress}:ButtonLargeType)=>{
  return(
    // @ts-ignore
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}
