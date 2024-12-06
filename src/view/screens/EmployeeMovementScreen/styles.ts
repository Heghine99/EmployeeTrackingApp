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
  linier: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: theme.colors.gray[1],
    marginVertical: 15,
  },
  sheetInner: {
    padding: 15,
  },
  innerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  writeButton: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.blue,
  },
});
