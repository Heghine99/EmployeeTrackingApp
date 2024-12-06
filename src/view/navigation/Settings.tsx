import { ParamListBase } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";

import { EmployeeMapScreen } from "../screens/EmployeeMapScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

export type SettingsStackParamList = {
  SettingsScreen: undefined;
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsNavigator: React.FC = () => {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions}>
      <SettingsStack.Screen component={SettingsScreen} name="SettingsScreen" />
    </SettingsStack.Navigator>
  );
};
