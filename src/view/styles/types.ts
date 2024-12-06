import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type TextVariant =
  | "h0"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p1"
  | "p3"
  | "p4"
  | "p5"
  | "p6"
  | "p7";

export interface TextThemeProps {
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
}

export type FontWeight = "regular" | "medium" | "semiBold" | "bold" | "extra";

export type FontFamily = Record<FontWeight, string>;

export interface Theme {
  colors: {
    accent: Record<number, string>;
    negative?: string;
    secondary?: string;
    common: {
      error: string;
      success: string;
      [key: string]: string;
    };
    white: string;
    black: Record<number, string>;
    gray: Record<number, string>;
    blue: string;
  };
  fontFamily: FontFamily;
  text: Record<TextVariant, TextThemeProps>;
}

export type NamedStyles<T> = {
  [key in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const makeStyles = <
  P extends Record<string, unknown> | void,
  S extends NamedStyles<S>
>(
  styles: ((props: P) => S) | S
): ((props: P) => S) => {
  return styles instanceof Function ? styles : () => styles;
};
