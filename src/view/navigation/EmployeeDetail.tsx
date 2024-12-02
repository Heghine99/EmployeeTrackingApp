import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";

import { EmployeeDetailScreen } from "../screens/EmployeeDetailScreen";

export type EmployeeDetailStackParamList = {
  EmployeeDetailScreen: undefined;
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const EmployeeDetailStack =
  createNativeStackNavigator<EmployeeDetailStackParamList>();

export const EmployeeDetailNavigator: React.FC = () => {
  return (
    <EmployeeDetailStack.Navigator screenOptions={screenOptions}>
      <EmployeeDetailStack.Screen
        component={EmployeeDetailScreen}
        name="EmployeeDetailScreen"
      />
    </EmployeeDetailStack.Navigator>
  );
};
