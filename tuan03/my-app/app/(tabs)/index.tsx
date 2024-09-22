import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FirstScreen from "../../components/FirstScreen"
import Bai1a from "../../components/1_a"
import Bai1b from "../../components/1_b"
import Bai1c from "../../components/1_c"
import Bai2c from "../../components/2_c"
import TikiOK from "../../components/tiki_OK"
import Ex1UseState from "../../components/ex1_UseState"
import Ex2UseState from "../../components/ex2_UseState"
export default function HomeScreen() {
  return (
    <Bai2c />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
