import {Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={ styles.container}
    >
      <Image source={require('@/assets/images/mark.png')} style={styles.Image1}></Image>
      <Text style={styles.text1}>Mark Zuckerberg</Text>
      <Text style={styles.text2}>CEO Meta</Text>
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
    paddingTop: 20,
    fontSize: 20,
  },
  text2: {
    fontFamily: 'Arial',
  },
  Image1: {
    borderRadius: 20,
  }
});