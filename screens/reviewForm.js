import React from "react";
import { Formik } from "formik";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={reviewSchema}
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <View
            style={{
              width: "100%",
            }}
          >
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={styles.errortext}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={styles.errortext}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={styles.errortext}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  errortext: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});
