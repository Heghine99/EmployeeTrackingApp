import { AppText } from "@/src/uiKit/AppText";
import React from "react";
import { View, Text, TouchableOpacity, Linking, Pressable } from "react-native";
import { theme } from "../../styles";
import { styles } from "./styles";
import { Employee, Movement, Track } from "@/src/data/types";

interface EmployeeItemProps extends Movement {
  onPress: (item: Movement) => void;
  item: Movement;
}

export const EmployeeDetailItem: React.FC<EmployeeItemProps> = ({
  time,
  item,
  distance,
  onPress,
}) => {
  return (
    <Pressable onPress={() => onPress(item)} style={styles.movementRow}>
      <AppText style={styles.timeText}>{time}</AppText>
      <AppText style={styles.distanceText}>{distance}</AppText>
    </Pressable>
  );
};
