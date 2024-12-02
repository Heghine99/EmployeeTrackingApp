import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import { theme } from "../../styles";
import { AppText } from "@/src/uiKit/AppText";
import SettingsIcon from "@/src/view/assets/icons/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeType } from "@/src/store/slices/mapSlice";
import { mapListSelector } from "@/src/store/slices/selectors";
import { styles } from "./styles";
import GoBackIcon from "@/src/view/assets/icons/goBack.svg";

interface HeaderProps {
  widthGoBack?: boolean;
  handleGoBack?: () => void;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({
  widthGoBack,
  handleGoBack,
  title,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isActiveButton } = useSelector(mapListSelector);

  const openSettings = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

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
                  Список
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
                  Карта
                </AppText>
              </Pressable>
            </View>
            <Pressable onPress={openSettings}>
              <SettingsIcon width={30} hanging={30} />
            </Pressable>
          </View>
          <Pressable
            onPress={() => {}}
            style={[styles.buttonStyle, styles.filterButton]}
          >
            <AppText color={theme.colors.white} variant="p1">
              Фильтр
            </AppText>
          </Pressable>
        </View>
      )}
    </>
  );
};
