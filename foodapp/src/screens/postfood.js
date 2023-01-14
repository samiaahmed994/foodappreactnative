import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig.js/firebase";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";


const postfood = (props) => {
  const [username, setUsername] = useState("");
  const [foodname, setFoodname] = useState("");
  const [foodcost, setFoodcost] = useState("");
  const [foodweight, setFoodweight] = useState("");
  const [contact, setContact] = useState("");

  const [location, setLocation] = useState("");

  const Create = () => {
    if (username && foodname && foodcost && foodweight && contact && location) {
      const myDoc = doc(db, "FoodApp", username);

      const docData = {
        name: username,
        contactnumber: contact,
        foodname: foodname,
        foodcost: foodcost,
        foodweight: foodweight,

        location: location,
      };

      setDoc(myDoc, docData)
        .then(() => {
          alert("Document Created Successfully!");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <View>
    

      <View>
        <ScrollView>
          <Text style={styles.text}>
            Enter Name 
          </Text>

          <TextInput
          style={styles.texts}
            placeholder=" username"
            onChangeText={(currentInput) => {
              setUsername(currentInput);
            }}
          />
          <Text style={styles.text}>
            Food Name 
          </Text>

          <TextInput
          style={styles.texts}
            placeholder="foodname"
            onChangeText={(currentInput) => {
              setFoodname(currentInput);
            }}
          />
          <Text style={styles.text}>
            Food Cost 
          </Text>

          <TextInput
          style={styles.texts}
            placeholder="foodcost"
            onChangeText={(currentInput) => {
              setFoodcost(currentInput);
            }}
          />
          <Text style={styles.text}>
            Food Weight 
          </Text>

          <TextInput
          style={styles.texts}
            placeholder="foodweight"
            onChangeText={(currentInput) => {
              setFoodweight(currentInput);
            }}
          />

          <Text style={styles.text}>
            {" "}
            Contact Number
          </Text>

          <TextInput
          style={styles.texts}
            placeholder="contact number"
            onChangeText={(currentInput) => {
              setContact(currentInput);
            }}
          />
          <Text style={styles.text}>Location</Text>
          <TextInput
          style={styles.texts}
            placeholder="location"
            onChangeText={(currentInput) => {
              setLocation(currentInput);
            }}
          ></TextInput>
          <TouchableOpacity
            style={[
              {
                marginLeft: 0,
                height: 200,
                width: 500,
                backgroundColor: "white",
              },
            ]}
           
            onPress={Create}
          >
            <Text style={{ marginLeft: 160,marginTop:20 }}>
            <Entypo name="add-user" size={80} color="black" onPress={()=>{
                props.navigation.navigate("");
            }} />
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#CCCCFF',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:40
  },
 
  text: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: "white",
    fontSize: 15,
  },
  textss: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#66B2FF",
    fontSize: 20,
  },
  texts: {
    marginLeft:90,
    width:200,
    padding: 0,
    textAlign: "center",
    alignItems: "center",
borderWidth:2,
    fontSize: 20,
  },
  icon: {
    padding: 10,
  },
  but: {
    marginTop: 75,
    height: 100,
  },
  buton: {
    backgroundColor: "#CCCCFF",
  },
  view: {
    backgroundColor: "#FFCCFF",
    flexDirection: "column",
    width: 300,
    marginLeft: 40,
    justifyContent: "center",
    marginBottom: 500,
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

export default postfood;

// import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// // Using DB Reference
// import { db } from '../screens/config'

// export default function Cruds() {

//   // Storing User Data
//   const [userDoc, setUserDoc] = useState(null)
//   // Update Text
//   const [text, setText] = useState("")

//   // MARK: CRUD Functions
//   const Create = () => {
//     // MARK: Creating New Doc in Firebase
//     // Before that enable Firebase in Firebase Console
//     const myDoc = doc(db, "Bikes", "MyBikes")

//     // Your Document Goes Here
//     const docData = {
//       "name": "iJustine",
//       "bio": "YouTuber"
//     }

//     setDoc(myDoc, docData)
//       // Handling Promises
//       .then(() => {
//         // MARK: Success
//         alert("Document Created!")
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })
//   }

//   const Read = () => {
//     // MARK: Reading Doc
//     // You can read what ever document by changing the collection and document path here
//     const myDoc = doc(db, "Bikes","MyBikes")

//     getDoc(myDoc)
//       // Handling Promises
//       .then((snapshot) => {
//         // MARK: Success
//         if (snapshot.exists) {
//           setUserDoc(snapshot.data())
//         }
//         else {
//           alert("No Doc Found")
//         }
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })

//   }

//   const Update = (value, merge) => {
//     // MARK: Updating Doc
//     const myDoc = doc(db, "Bikes", "MyBikes")

//     // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
//     setDoc(myDoc, value, { merge: merge })
//       // Handling Promises
//       .then(() => {
//         // MARK: Success
//         alert("Updated Successfully!")
//         setText("")
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })
//   }

//   const Delete = () => {
//     // MARK: Deleting Doc
//     const myDoc = doc(db, "Bikes", "MyBikes")

//     deleteDoc(myDoc)
//       // Handling Promises
//       .then(() => {
//         // MARK: Success
//         alert("Deleted Successfully!")
//       })
//       .catch((error) => {
//         // MARK: Failure
//         alert(error.message)
//       })

//   }

//   return (
//     <View style={styles.container}>
//       <Button title='Create New Doc' onPress={Create}></Button>
//       <Button title='Read Doc' onPress={Read}></Button>
//       {
//         userDoc != null &&
//         <Text>Bio: {userDoc.bio}</Text>
//       }
//       <TextInput style={{
//         width: '95%',
//         fontSize: 18,
//         padding: 12,
//         borderColor: 'gray',
//         borderWidth: 0.2,
//         borderRadius: 10,
//         marginVertical: 20
//       }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

//       <Button title='Update Doc' onPress={() => {
//         Update({
//           "bio": text
//         }, true)
//       }} disabled={text == ""}></Button>
//       <Button title='Delete Doc' onPress={Delete}></Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
