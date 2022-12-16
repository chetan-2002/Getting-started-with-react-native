import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
const ReviewDetails = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>{route.params.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default ReviewDetails;
