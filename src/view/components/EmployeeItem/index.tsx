import { AppText } from "@/src/uiKit/AppText";
import React from "react";
import { View, Text, TouchableOpacity, Linking, Pressable } from "react-native";
import { styles } from "./styles";
import { theme } from "../../styles";
import { Employee } from "@/src/data/types";

interface EmployeeItemProps extends Employee {
  onPress: (id: number) => void;
}

const EmployeeItem: React.FC<EmployeeItemProps> = ({
  name,
  position,
  phone,
  id,
  onPress,
}) => {
  return (
    <Pressable onPress={() => onPress(id)} style={styles.container}>
      <AppText style={styles.name} color={theme.colors.black[0]}>
        {name}
      </AppText>
      <AppText style={styles.position} color={theme.colors.gray[0]}>
        {position}
      </AppText>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
        <AppText style={styles.phone} color={theme.colors.blue}>
          {phone}
        </AppText>
      </TouchableOpacity>
    </Pressable>
  );
};

export default EmployeeItem;
