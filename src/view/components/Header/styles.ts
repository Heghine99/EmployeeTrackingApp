import { theme } from "../../styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  containerInner: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    gap: 10,
    flexDirection: "row",
  },
  filterButton: {
    marginTop: 10,
    width: "100%",
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 40,
    borderRadius: 5,
    backgroundColor: theme.colors.blue,
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: theme.colors.blue,
    backgroundColor: theme.colors.white,
  },
  goBack: {
    position: "absolute",
    left: 15,
    top: 8,
  },
  headerWidthTitle: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.blue,
  },
});
