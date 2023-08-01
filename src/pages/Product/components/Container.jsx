import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TextDefault } from "../../../components";
import farmLogo from "../../../../assets/logo.png";

const Container = () => {
  return (
    <>
      <TextDefault style={styles.detailTitle} variant="bold">
        Cesta de Verduras
      </TextDefault>
      <View style={styles.farmContainer}>
        <Image source={farmLogo} style={styles.farmLogo} />
        <TextDefault style={styles.detailFarmName}>Maurício Silva</TextDefault>
      </View>

      <TextDefault style={styles.detailDescription}>
        Uma cesta com produtos selecionados cuidadosamente da fazendo direto
        para sua cozinha
      </TextDefault>
      <TextDefault style={styles.detailPrice} variant="bold">
        R$ 40,00
      </TextDefault>
    </>
  );
};

const styles = StyleSheet.create({
  detailTitle: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
  },
  detailFarmName: {
    fontSize: 16,
    lineHeight: 26,
  },
  detailDescription: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  detailPrice: {
    color: "#2A9F85",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  farmContainer: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  farmLogo: {
    width: 32,
    height: 32,
    borderRadius: 10,
    marginRight: 12,
  },
});

export default Container;
