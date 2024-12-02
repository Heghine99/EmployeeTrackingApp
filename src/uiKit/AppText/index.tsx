import { FontWeight, makeStyles, TextVariant, theme } from "@/src/view/styles";
import React from "react";
import { Text as DefaultText } from "react-native";

type InnerAppTextProps = {
  variant?: TextVariant;
  color?: string;
  fontWeight?: FontWeight;
};

export type AppTextProps = InnerAppTextProps & DefaultText["props"];

export const AppText: React.FC<AppTextProps> = ({ style, ...otherProps }) => {
  const themeStyle = useStyles(otherProps);

  return <DefaultText style={[themeStyle.text, style]} {...otherProps} />;
};

const useStyles = makeStyles((props: InnerAppTextProps) => {
  const defaultStyle = theme.text[props.variant ?? "p3"];

  return {
    text: {
      ...defaultStyle,
      fontFamily: props.fontWeight
        ? theme.fontFamily[props.fontWeight]
        : defaultStyle.fontFamily,
      color: props.color ?? theme.colors.black["1"],
    },
  };
});
