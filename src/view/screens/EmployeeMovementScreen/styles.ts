import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../styles";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  bottomSheet: {
    padding: 20,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    width: "100%",
    // alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalContent: {
    width: "100%",
    height: 360,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray[0],
  },

  closeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  linier: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: theme.colors.gray[0],
  },
});
