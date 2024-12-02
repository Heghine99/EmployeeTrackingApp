import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  employeesSelector,
  mapListSelector,
} from "@/src/store/slices/selectors";
import { MapViewComponent } from "../../components/MapView";
import EmployeeItem from "../../components/EmployeeItem";
import { Employee } from "@/src/data/types";
import { MainContainer } from "../../components/MainContainer";
import { useNavigation } from "expo-router";
import { setSelectedEmployee } from "@/src/store/slices/employeesSlice";

export const EmployeeMapScreen: React.FC = () => {
  const { isActiveButton } = useSelector(mapListSelector);
  const { employees } = useSelector(employeesSelector);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onHandleItem = useCallback(
    (id: number) => {
      dispatch(setSelectedEmployee(id));
      navigation.navigate("EmployeeDetail", { screen: "EmployeeDetailScreen" });
    },
    [navigation]
  );

  const renderEmployee = ({ item }: { item: Employee }) => (
    <EmployeeItem {...item} onPress={onHandleItem} />
  );

  return (
    <MainContainer withHeader>
      {!!isActiveButton && <MapViewComponent />}
      {!isActiveButton && (
        <FlatList
          data={employees}
          renderItem={renderEmployee}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </MainContainer>
  );
};
