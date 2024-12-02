import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { EmployeeMovementScreen } from "../screens/EmployeeMovementScreen";
import { Movement } from "@/src/data/types";

export type EmployeeMovementStackParamList = {
  EmployeeMovementScreen: { item: Movement };
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export type EmployeeMovementScreenProps<
  Screen extends keyof EmployeeMovementStackParamList
> = NativeStackScreenProps<EmployeeMovementStackParamList, Screen>;

const EmployeeMovementStack =
  createNativeStackNavigator<EmployeeMovementStackParamList>();

export const EmployeeMovementNavigator: React.FC = () => {
  return (
    <EmployeeMovementStack.Navigator screenOptions={screenOptions}>
      <EmployeeMovementStack.Screen
        component={EmployeeMovementScreen}
        name="EmployeeMovementScreen"
      />
    </EmployeeMovementStack.Navigator>
  );
};
