import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: width,
    height: height,
  },
});
