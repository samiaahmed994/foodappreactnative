import React, { useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig.js/firebase";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
const image = {
  uri: "https://i.pinimg.com/originals/29/01/79/290179e7ee286751a4b0332087583ad6.jpg",
};

const BuyFood = ({ navigation }) => {
  const [userDoc, setUserDoc] = useState(null);

  const Read = () => {
   
    const myDoc = doc(db, "FoodApp", "Samia Ahmed");

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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View>
        <Text style={styles.textss} onPress={Read}>
          Food List
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
                Name: {userDoc.name};
              </Text>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                ContactNumber: {userDoc.contactnumber}
              </Text>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                Food Name: {userDoc.foodname}
              </Text>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                Food Weight: {userDoc.foodweight}
              </Text>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                Food Cost: {userDoc.foodcost} $
              </Text>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Addcart", item)}
              >
                Location: {userDoc.location}
              </Text>
            </View>
          )}

          <View>
            <TouchableOpacity
              style={[{ marginLeft: 10, height: 50 }]}
              onPress={() => {
                navigation.navigate("Addcart", item);
              }}
            >
              <Text style={{ marginLeft: 100,fontSize:30 }} onPress={()=>{
                alert("Wait for Supplier Request Send !!")
              }}>
               Buy
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
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

    fontSize: 15,
  },
  textss: {
    textAlign: "center",
    padding: 10,

    fontSize: 50,
    borderColor: "#910075",
    color: "white",

    marginBottom: 20,
  },

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
});

export default BuyFood;
