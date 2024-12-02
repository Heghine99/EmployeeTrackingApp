import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import { EmployeeMapScreen } from "../screens/EmployeeMapScreen";

export type EmployeeMapStackParamList = {
  EmployeeMapScreen: undefined;
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const EmployeeMapStack =
  createNativeStackNavigator<EmployeeMapStackParamList>();

export const EmployeeMapNavigator: React.FC = () => {
  return (
    <EmployeeMapStack.Navigator screenOptions={screenOptions}>
      <EmployeeMapStack.Screen
        component={EmployeeMapScreen}
        name="EmployeeMapScreen"
      />
    </EmployeeMapStack.Navigator>
  );
};
