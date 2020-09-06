import React from "react";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "../constants";

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 14
  }
})

export default () => {
  return(
    <LinearGradient
      style={styles.card}
      colors={COLORS.gradientCardDemo}
    />
  )
}
