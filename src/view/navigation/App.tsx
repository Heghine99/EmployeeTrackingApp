import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EmployeeMapNavigator, EmployeeMapStackParamList } from "./EmployeeMap";
import {
  EmployeeDetailNavigator,
  EmployeeDetailStackParamList,
} from "./EmployeeDetail";
import { SettingsNavigator, SettingsStackParamList } from "./Settings";
import { NavigatorScreenParams } from "@react-navigation/native";
import {
  EmployeeMovementNavigator,
  EmployeeMovementStackParamList,
} from "./EmployeeMovement";

export type RootStackParamList = {
  EmployeeMap: NavigatorScreenParams<EmployeeMapStackParamList>;
  EmployeeDetail: NavigatorScreenParams<EmployeeDetailStackParamList>;
  EmployeeMovement: NavigatorScreenParams<EmployeeMovementStackParamList>;
  Settings: NavigatorScreenParams<SettingsStackParamList>;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

export const AppNavigation: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="EmployeeMap" component={EmployeeMapNavigator} />
      <AppStack.Screen
        name="EmployeeDetail"
        component={EmployeeDetailNavigator}
      />
      <AppStack.Screen
        name="EmployeeMovement"
        component={EmployeeMovementNavigator}
      />
      <AppStack.Screen name="Settings" component={SettingsNavigator} />
    </AppStack.Navigator>
  );
};
