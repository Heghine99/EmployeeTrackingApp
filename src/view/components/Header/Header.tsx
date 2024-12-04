import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import { theme } from "../../styles";
import { AppText } from "@/src/uiKit/AppText";
import SettingsIcon from "@/src/view/assets/icons/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeType } from "@/src/store/slices/mapSlice";
import {
  employeesSelector,
  mapListSelector,
} from "@/src/store/slices/selectors";
import { styles } from "./styles";
import GoBackIcon from "@/src/view/assets/icons/goBack.svg";
import { t } from "i18n-js";

interface HeaderProps {
  widthGoBack?: boolean;
  handleGoBack?: () => void;
  handleApplyFilters?: () => void;
  handleSettings?: () => void;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({
  widthGoBack,
  handleGoBack,
  handleApplyFilters,
  handleSettings,
  title,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isActiveButton } = useSelector(mapListSelector);
  const { resetFilter } = useSelector(employeesSelector);

  // const openSettings = useCallback(() => {
  //   navigation.navigate("Settings", { screen: "SettingsScreen" });
  // }, [navigation]);

  return (
    <>
      {widthGoBack && (
        <Pressable
          onPress={() => handleGoBack?.() || navigation.goBack()}
          style={styles.headerWidthTitle}
        >
          <GoBackIcon width={24} hanging={24} style={styles.goBack} />
          <AppText color={theme.colors.white}>{title}</AppText>
        </Pressable>
      )}

      {!widthGoBack && (
        <View style={styles.container}>
          <View style={styles.containerInner}>
            <View style={styles.buttons}>
              <Pressable
                onPress={() => dispatch(changeType(0))}
                style={[
                  styles.buttonStyle,
                  !isActiveButton && styles.borderStyle,
                ]}
              >
                <AppText
                  color={
                    !isActiveButton ? theme.colors.blue : theme.colors.white
                  }
                  variant="p1"
                >
                  {t("header.list")}
                </AppText>
              </Pressable>
              <Pressable
                onPress={() => dispatch(changeType(1))}
                style={[
                  styles.buttonStyle,
                  !!isActiveButton && styles.borderStyle,
                ]}
              >
                <AppText
                  color={
                    !!isActiveButton ? theme.colors.blue : theme.colors.white
                  }
                  variant="p1"
                >
                  {t("header.map")}
                </AppText>
              </Pressable>
            </View>
            <Pressable onPress={handleSettings}>
              <SettingsIcon width={30} hanging={30} />
            </Pressable>
          </View>
          <Pressable
            onPress={handleApplyFilters}
            style={[styles.buttonStyle, styles.filterButton]}
          >
            <AppText color={theme.colors.white} variant="p1">
              {resetFilter ? t("header.reset") : t("header.filter")}
            </AppText>
          </Pressable>
        </View>
      )}
    </>
  );
};
