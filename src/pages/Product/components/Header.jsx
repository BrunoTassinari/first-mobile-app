import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { TextDefault } from "../../../components";
import headerImage from "../../../../assets/topo.png";

const { width } = Dimensions.get("screen");

const Header = () => {
  return (
    <>
      <Image source={headerImage} style={styles.container} />
      <TextDefault style={styles.containerText} variant="bold">
        {" "}
        Detalhe da cesta
      </TextDefault>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: (578 / 768) * width,
  },
  containerText: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
    lineHeight: 26,
  },
});

export default Header;
