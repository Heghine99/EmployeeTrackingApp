import React, { forwardRef, ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

interface Props {
  children: ReactNode;
  wrapperStyle?: ViewStyle;
  closeOnDragDown?: boolean;
  onClose?: () => void;
  draggableIconHeight?: number;
  containerStyles?: ViewStyle;
  snapPoints?: string[] | number[];
  enableOverDrag?: boolean;
}

export const BottomSheetModal = forwardRef<BottomSheet, Props>(
  (
    {
      children,
      snapPoints,
      closeOnDragDown = true,
      onClose,
      containerStyles,
      wrapperStyle,
    },
    ref
  ) => {
    return (
      <BottomSheet
        enableContentPanningGesture={false}
        containerStyle={containerStyles}
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose={closeOnDragDown}
        onClose={onClose}
        style={wrapperStyle}
      >
        <BottomSheetView style={{ flex: 1, height: 400 }}>
          <View>{children}</View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);
