import {StyleSheet} from "react-native";
import COLORS from "./COLOS";

export default StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor: COLORS.black
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBig: {
    width: 300,
    height: 200
  },
  bottomAbsolute:{
    width: '100%',
    position: 'absolute',
    bottom:0
  }
})
