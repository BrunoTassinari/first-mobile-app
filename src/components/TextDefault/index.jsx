import React from "react";
import { Text, StyleSheet } from "react-native";

const TextDefault = ({ children, style, variant }) => {
  if (!variant) variant = "textRegular";

  return <Text style={[style, styles[variant]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "normal",
  },
  bold: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "normal",
  },
});

export default TextDefault;
