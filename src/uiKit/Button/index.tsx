import * as React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Flow } from "react-native-animated-spinkit";
import { AppText } from "../AppText";
import { makeStyles, theme } from "@/src/view/styles";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface ButtonProps extends Omit<PressableProps, "title" | "style"> {
  variant?: ButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  containerStyle,
  label,
  variant,
  disabled,
  isLoading,
  fullWidth,
  children,
  textStyle,
  ...buttonProps
}) => {
  const styles = useStyles({ variant });

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || isLoading}
      {...buttonProps}
      style={[
        styles.button,
        fullWidth && { width: "100%" },
        disabled && styles.buttonDisabled,
      ]}
    >
      <>
        {label && (
          <AppText
            style={[
              styles.buttonText,
              textStyle,
              isLoading && styles.buttonTextLoading,
              disabled && styles.buttonTextDisabled,
            ]}
          >
            {label}
          </AppText>
        )}
        {isLoading && (
          <Flow color={theme.colors.white} size={40} style={styles.loader} />
        )}
        {children}
      </>
    </Pressable>
  );
};

const useStyles = makeStyles(({ variant }: Pick<ButtonProps, "variant">) => {
  return {
    icon: {
      marginRight: 5,
    },
    button: {
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      height: 60,
      ...(variant === ButtonVariant.SECONDARY
        ? {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: theme.colors.black,
            color: theme.colors.secondary,
          }
        : {}),
    },
    buttonDisabled: {
      backgroundColor: "#FFCFB3",
      borderWidth: 0,
    },
    buttonText: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: "700",
      color: theme.colors.white,
      fontFamily: theme.fontFamily.semiBold,
    },
    buttonTextDisabled: {
      color: theme.colors.white,
      opacity: 1,
    },
    buttonTextLoading: {
      opacity: 0,
    },
    loader: {
      position: "absolute",
    },
  };
});
