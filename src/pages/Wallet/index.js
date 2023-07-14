import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import topImage from "../../../assets/topo.png";
import farmLogo from "../../../assets/logo.png";

const { width, height } = Dimensions.get("screen");

const Wallet = () => {
  return (
    <>
      <Image source={topImage} style={styles.container} />
      <Text style={styles.constainerText}> Detalhe da cesta</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Cesta de Verduras</Text>
        <View style={styles.farmContainer}>
          <Image source={farmLogo} style={styles.farmLogo} />
          <Text style={styles.detailFarmName}>Maurício Silva</Text>
        </View>

        <Text style={styles.detailDescription}>
          Uma cesta com produtos selecionados cuidadosamente da fazendo direto
          para sua cozinha
        </Text>
        <Text style={styles.detailPrice}>R$ 50,00</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: (578 / 768) * width,
  },
  constainerText: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 26,
  },
  detailContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  detailTitle: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontFamily: "Montserrat-Bold",
  },
  detailFarmName: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Montserrat-Regular",
  },
  detailDescription: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Montserrat-Regular",
  },
  detailPrice: {
    color: "#2A9F85",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontFamily: "Montserrat-Bold",
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

export default Wallet;
