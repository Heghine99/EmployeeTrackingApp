import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../styles";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
    width: width,
    height: height,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    width: 350,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.blue,
  },
  errorText: {
    color: theme.colors.negative,
    marginBottom: 10,
  },
  languageOption: {
    padding: 15,
    backgroundColor: "#ffffff",
    marginBottom: 1,
  },
  languageOptionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    width: 25,
    height: 18,
    borderRadius: 3,
  },
});
