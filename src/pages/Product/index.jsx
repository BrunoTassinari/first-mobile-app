import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Container from "./components/Container";



const Product = () => {
  return (
    <>
      <Header />
      <View style={styles.detailContainer}>
        <Container />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});


export default Product;
