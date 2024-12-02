import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { employeesSelector } from "@/src/store/slices/selectors";
import { MainContainer } from "../../components/MainContainer";
import { AppText } from "@/src/uiKit/AppText";
import { EmployeeMovementScreenProps } from "../../navigation/EmployeeMovement";
import { MapViewComponent } from "../../components/MapView";
import { BottomSheetModal } from "@/src/uiKit/BottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { styles } from "./styles";
import { SwipeDownModal } from "@/src/uiKit/SwipeDownModal";
import { RBSheet } from "react-native-raw-bottom-sheet";

export const EmployeeMovementScreen: FC<
  EmployeeMovementScreenProps<"EmployeeMovementScreen">
> = ({ route }) => {
  const { item } = route.params;
  const { selectedEmployee } = useSelector(employeesSelector);
  const bottomSheetRef = useRef<RBSheet>(null);
  const snapPoints = ["50%", "10%"];

  return (
    <MainContainer
      withHeader
      widthGoBack
      title={`Передвижения ${selectedEmployee?.name}`}
    >
      <MapViewComponent />
      <SwipeDownModal ref={bottomSheetRef} height={200} wrapperStyle>
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
      </SwipeDownModal>

      {/* <BottomSheetModal
        ref={bottomSheetRef}
        closeOnDragDown={false}
        enableOverDrag={true}
        snapPoints={["20%"]}
        containerStyles={styles.bottomSheet}
      >
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
        <AppText>jjjj</AppText>
      </BottomSheetModal> */}
    </MainContainer>
  );
};
