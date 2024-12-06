import React, { FC,  useRef, useState } from "react";
import { useSelector } from "react-redux";
import { employeesSelector } from "@/src/store/slices/selectors";
import { MainContainer } from "../../components/MainContainer";
import { AppText } from "@/src/uiKit/AppText";
import { EmployeeMovementScreenProps } from "../../navigation/EmployeeMovement";
import { MapViewComponent } from "../../components/MapView";
import { BottomSheetModal } from "@/src/uiKit/BottomSheet";
import { styles } from "./styles";
import { Linking, Pressable, View } from "react-native";
import { theme } from "../../styles";
import { t } from "i18n-js";

export const EmployeeMovementScreen: FC<
  EmployeeMovementScreenProps<"EmployeeMovementScreen">
> = ({ route }) => {
  const { item } = route.params;
  const { selectedEmployee } = useSelector(employeesSelector);
  const bottomSheetRef = useRef(null);
  const [ditailsRoute, setditailsRoute] = useState({
    distance: "",
    duration: "",
    averageSpeed: "",
  });
  const handleCallEmployee = () => {
    Linking.openURL(`tel:${selectedEmployee?.phone}`);
  };

  const handleMessageEmployee = () => {
    const message = t("route_details.message_employee");
    Linking.openURL(
      `whatsapp://send?phone=${selectedEmployee?.phone}&text=${message}`
    );
  };

  return (
    <MainContainer
      withHeader
      widthGoBack
      title={`${t("header.movements")} ${selectedEmployee?.name}`}
    >
      <MapViewComponent route={item.route} setditailsRoute={setditailsRoute} />

      <BottomSheetModal
        ref={bottomSheetRef}
        closeOnDragDown={false}
        enableOverDrag={true}
        snapPoints={["40%"]}
        containerStyles={styles.bottomSheet}
      >
        <View style={styles.sheetInner}>
          <AppText>
            {item.date}, {item.time}
          </AppText>
          <View style={styles.linier} />
          <View style={styles.innerItem}>
            <AppText>{t("route_details.duration")}</AppText>
            <AppText>{ditailsRoute?.duration}</AppText>
          </View>
          <View style={styles.innerItem}>
            <AppText>{t("route_details.distance")}</AppText>
            <AppText>{ditailsRoute?.distance}</AppText>
          </View>
          <View style={styles.innerItem}>
            <AppText>{t("route_details.average_speed")}</AppText>
            <AppText>{ditailsRoute?.averageSpeed}</AppText>
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={handleCallEmployee} style={styles.writeButton}>
              <AppText color={theme.colors.blue}>
                {t("route_details.message")}
              </AppText>
            </Pressable>
            <Pressable
              onPress={handleMessageEmployee}
              style={[
                styles.writeButton,
                { backgroundColor: theme.colors.blue },
              ]}
            >
              <AppText color={theme.colors.white}>
                {t("route_details.call")}
              </AppText>
            </Pressable>
          </View>
        </View>
      </BottomSheetModal>
    </MainContainer>
  );
};
