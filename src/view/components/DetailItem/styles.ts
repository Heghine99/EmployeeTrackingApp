import { StyleSheet } from "react-native";
import { theme } from "../../styles";

export const styles = StyleSheet.create({
  movementRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#f5f5f5",
  },
  timeText: {
    fontSize: 14,
    color: "#3b79f0",
  },
  distanceText: {
    fontSize: 14,
    color: "#555",
  },
});
