import {Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={ styles.container}
    >
      <Image source={require('@/assets/images/mark.png')}></Image>
      <Text style={styles.text1}>Hello World!</Text>
      <Text style={styles.text2}>Welcome to React Native Project Development.</Text>
    </View>
  );
}
const styles = StyleSheet.create ({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },

  text1: {
    fontWeight: 'bold',
  },
  text2: {
    fontFamily: 'Arial',
  },
});