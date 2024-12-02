import { StyleSheet } from "react-native";
import { theme } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.gray[1],
  },
  sectionTitle: {
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.gray[1],
  },
});
