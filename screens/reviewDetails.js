import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Card from "../shared/card";
const ReviewDetails = () => {
  const route = useRoute();
  const stars = route.params.rating;
  return (
    <View style={styles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        {/* <Text>{route.params.rating}</Text> */}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default ReviewDetails;
