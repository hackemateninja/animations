import React, {useState} from "react";
import {View} from "react-native";
import {STYLES} from "../constants";
import {ButtonLarge, Card} from "../components/";
import Animated, {
  add,
  block,
  cond,
  eq,
  Extrapolate,
  interpolate,
  not,
  proc,
  set,
  startClock,
  useCode,
} from 'react-native-reanimated'
import {useClock, useValues} from "react-native-redash";

const duration = 500;

const screenStyle = {...STYLES.screen, ...STYLES.center}
const runAnimation = proc(
  (
    clock: Animated.Clock,
    from: Animated.Value<number>,
    to: Animated.Value<number>,
    startTime: Animated.Value<number>,
    startAnimation: Animated.Value<number>,
    opacity: Animated.Node<number>
  ) =>
    block([
      startClock(clock),
      cond(eq(startAnimation, 1), [
        set(from, opacity),
        set(to, not(to)),
        set(startTime, clock),
        set(startAnimation, 0),
      ]),
    ])
);

export default () =>{

  const [show, setShow] = useState(true);
  const clock = useClock();
  const [startTime, from, to, startAnimation] = useValues(0,0,0,0);
  const entTime = add(startTime, duration);
  const opacity = interpolate(clock,{
    inputRange: [startTime, entTime],
    outputRange: [from, to],
    extrapolate: Extrapolate.CLAMP
  });
  useCode(() => set(startAnimation, 1), [show]);
  useCode(
    () => runAnimation(clock, from, to, startTime, startAnimation, opacity),
    [clock, from, opacity, startAnimation, startTime, to]
  );
  return(
    <View style={screenStyle}>
      <Animated.View style={{opacity,...STYLES.cardBig}}>
        <Card/>
      </Animated.View>
      <View style={STYLES.bottomAbsolute}>
        <ButtonLarge
          title={show ? 'hide' : 'Show'}
          onPress={()=>setShow(prev => !prev)}
        />
      </View>
    </View>
  )
}
