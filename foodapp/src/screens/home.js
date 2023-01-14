import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

const Home = (props) => {


  const image1 = {
    uri: "https://wallpapercave.com/wp/wp4485539.jpg",
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={image1}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.button}
            
            onPress={
              ()=>{
                props.navigation.navigate("SignUp")
              }
            }
          >
            <Entypo name="login" size={40} color="red" />\

            <Text  style={styles.text}>   Login </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buon}
          onPress={() => props.navigation.navigate("Accept")}
        >
          <AntDesign name="profile" size={70} color="brown" />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <View style={[styles.views, { flexDirection: "row", marginTop: 0 }]}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.navigation.navigate("ViewFood")}
          >
            <MaterialIcons name="preview" size={70} color="brown" />
            <Text style={styles.text}>View Foods</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttons, { marginLeft: 10 }]}
            onPress={() => props.navigation.navigate("postfood")}
          >
            <MaterialCommunityIcons name="post" size={70} color="brown" />
            <Text style={styles.text}>Upload Food</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#4C0099",
    alignItems: "center",
    justifyContent: "center",

    padding: 5,
  },
  views: {
    flex: 1,
    width: 70,
    height: 100,

    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 300,
    marginLeft: 170,
  },
  view: {
    flex: 1,

    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
  },
  buon: {
    width: 100,
    height: 100,

    padding: 10,
    alignItems: "center",
    justifyContent: "center",

    marginLeft: 150,

    borderRadius: 50,
  },

  button: {
    width: 200,
    height: 100,

    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 300,
  },
  buttons: {
    width: 150,
    height: 100,

    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Home;
