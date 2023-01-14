import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "./button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Card = (props) => {
  const popo = props.item;
  return (
    <View>
      <View style={styles.cardview}>
        <MaterialIcons
          style={styles.icon}
          name="directions-run"
          size={50}
          color="blue"
        />

        <MaterialIcons
          style={styles.icon}
          name="directions-bike"
          size={50}
          color="blue"
        />
        <MaterialCommunityIcons
          style={styles.icon}
          name="bike-fast"
          size={50}
          color="blue"
        />
      </View>

      <View>
        <Text
          style={styles.text}
          onPress={() => props.navigation.navigate("Fourth")}
        >
          {props.item}
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Fourth")}>
          <Text>{popo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'#CCCCFF'
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:40
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 700,
  },
  text: {
    color: "white",
    padding: 10,
    backgroundColor: "black",
    fontSize: 30,
  },
  textss: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#910075",
    fontSize: 30,
    borderColor: "#910075",

    marginBottom: 20,
  },
  icon: {
    padding: 10,
  },

  buton: {},
  view: {
    backgroundColor: "#FFCCFF",
    flexDirection: "column",
    width: 300,
    marginLeft: 40,
    justifyContent: "center",
    marginBottom: 20,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardview: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
export default Card;
