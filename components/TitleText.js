import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TitleText = (props) => {
  return <TextInput {...props} style={{ ...styles.title, ...props.style }} />;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;
