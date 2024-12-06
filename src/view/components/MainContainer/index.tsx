import React, { FC, PropsWithChildren } from "react";
import { StatusBar, View, StyleSheet, Pressable } from "react-native";
import { Header } from "../Header/Header";
import { AppText } from "@/src/uiKit/AppText";
import { theme } from "../../styles";
import GoBackIcon from "@/src/view/assets/icons/goBack.svg";

type MainContainerProps = PropsWithChildren<{
  backgroundColor?: string;
  title?: string;
  withPadding?: boolean;
  withHeader?: boolean;
  handleGoBack?: () => void;
  handleApplyFilters?: () => void;
  handleSettings?: () => void;
  widthGoBack?: boolean;
}>;

export const MainContainer: FC<MainContainerProps> = ({
  backgroundColor = "white",
  withPadding,
  children,
  withHeader,
  widthGoBack,
  title,
  handleGoBack,
  handleApplyFilters,
  handleSettings,
}) => {
  return (
    <View
      style={[
        styles.main,
        { backgroundColor },
        withPadding && { paddingHorizontal: 10 },
      ]}
    >
      <StatusBar animated barStyle="dark-content" />

      {withHeader && (
        <Header
          title={title}
          widthGoBack={widthGoBack}
          handleGoBack={handleGoBack}
          handleApplyFilters={handleApplyFilters}
          handleSettings={handleSettings}
        />
      )}

      <View
        style={{
          flex: 1,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
