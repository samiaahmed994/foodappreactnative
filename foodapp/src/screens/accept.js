import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig.js/firebase";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
const image = {
  uri: "https://i.pinimg.com/originals/29/01/79/290179e7ee286751a4b0332087583ad6.jpg",
};

const Accept = (props) => {
  const [userDoc, setUserDoc] = useState(null);
  const Read = () => {
    // MARK: Reading Doc
    // You can read what ever document by changing the collection and document path here
    const myDoc = doc(db, "FoodApp", "Ahmed Raihan");

    getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
          setUserDoc(snapshot.data());
        } else {
          alert("No Doc Found");
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  const Delete = () => {
    // MARK: Deleting Doc
    const myDoc = doc(db, "FoodApp", "Asif Raihan");

    deleteDoc(myDoc)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Deleted Successfully!");
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <View>
        <Text style={styles.textss} onPress={Read}>
          Request
        </Text>
      </View>

      <View>
        <Card style={styles.view}>
          {userDoc != null && (
            <View>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                Name: {userDoc.name}
              </Text>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                Food Name : {userDoc.foodname}
              </Text>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                Number: {userDoc.contactnumber}
              </Text>
            </View>
          )}

          <View>
            <TouchableOpacity
              style={[
                { height: 40, marginBottom: 30, backgroundColor: "green" },
              ]}
            >
              <Text
                style={{ marginLeft: 110, marginTop: 10, fontSize: 20 }}
                onPress={() => {
                  props.navigation.navigate("Home");
                  alert("CONGRATULATIONS!!! ");
                }}
              >
                Accept
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ height: 40, backgroundColor: "red" }]}>
              <Text
                style={{ marginLeft: 110, marginTop: 10, fontSize: 20 }}
                onPress={() => {
                  props.navigation.navigate("Home");
                  alert("Ok !!! ");
                }}
              >
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
        {/* )}
        /> */}
      </View>

      {/* <Button style={styles.buton}
color='blue'
      title=" Back"
      onPress={()=>props.navigation.navigate("Home")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 700,
  },
  text: {
    padding: 10,

    fontSize: 20,
  },
  textss: {
    textAlign: "center",
    padding: 10,

    fontSize: 30,
    borderColor: "#910075",
    color: "white",

    marginBottom: 20,
  },

  view: {
    flexDirection: "column",
    width: 300,
    height: 300,
    marginLeft: 40,
    justifyContent: "center",
    marginBottom: 20,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Accept;
