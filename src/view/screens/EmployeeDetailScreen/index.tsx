import React, { useCallback } from "react";
import { SectionList, View } from "react-native";

import { Movement } from "@/src/data/types";
import { MainContainer } from "../../components/MainContainer";
import { AppText } from "@/src/uiKit/AppText";
import { EmployeeDetailItem } from "../../components/DetailItem";
import { useSelector } from "react-redux";
import { employeesSelector } from "@/src/store/slices/selectors";
import { styles } from "./styles";
import { useNavigation } from "expo-router";

export const EmployeeDetailScreen: React.FC = () => {
  const { selectedEmployee } = useSelector(employeesSelector);
  const navigation = useNavigation();

  const handleOnPressTime = useCallback(
    (item: Movement) => {
      navigation.navigate("EmployeeMovement", {
        screen: "EmployeeMovementScreen",
        params: { item },
      });
    },
    [navigation]
  );

  const renderEmployee = ({ item }: { item: Movement }) => {
    return (
      <EmployeeDetailItem {...item} item={item} onPress={handleOnPressTime} />
    );
  };

  return (
    <MainContainer
      withHeader
      widthGoBack
      title={`Передвижения ${selectedEmployee?.name}`}
    >
      {selectedEmployee?.tracks.length === 0 ? (
        <AppText>No tracks available for this employee.</AppText>
      ) : (
        <SectionList
          contentContainerStyle={styles.container}
          sections={selectedEmployee?.tracks || []}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderEmployee}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionTitle}>
              <AppText>{title}</AppText>
            </View>
          )}
        />
      )}
    </MainContainer>
  );
};
