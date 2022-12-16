import React, { useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const Home = () => {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const addReviews = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType={"slide"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Button title="Close" onPress={() => setModalOpen(false)} />
            <ReviewForm addReview={addReviews} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: 20,
        }}
      >
        <Button title="Add a Review" onPress={() => setModalOpen(true)} />
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ReviewDetails", item);
            }}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
