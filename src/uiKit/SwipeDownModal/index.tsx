import { theme } from "@/src/view/styles";
import React, { forwardRef, ReactNode } from "react";
import { ViewStyle } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

interface Props {
  children: ReactNode;
  height: number;
  wrapperStyle?: boolean;
  closeOnDragDown?: boolean;
  onClose?: () => void;
  draggableIconHeigth?: number;
  containerStyles?: ViewStyle;
}

export const SwipeDownModal = forwardRef<RBSheet, Props>(
  (
    {
      children,
      height,
      wrapperStyle,
      closeOnDragDown,
      onClose,
      draggableIconHeigth = 80,
      containerStyles,
    },
    ref
  ) => {
    return (
      // ts ignore is being set because of missing children types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      <RBSheet
        closeOnDragDown={!closeOnDragDown}
        onClose={onClose}
        ref={ref}
        height={height}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            ...containerStyles,
          },
          wrapper: wrapperStyle
            ? {
                backgroundColor: theme.colors.black[1],
              }
            : {
                backgroundColor: "transparent",
              },
          draggableIcon: {
            width: draggableIconHeigth,
          },
        }}
      >
        {children}
      </RBSheet>
    );
  }
);
