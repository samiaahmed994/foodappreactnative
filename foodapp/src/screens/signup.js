import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Input,
  Button,
  Card,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import CustomButton from "../components/button";
const SignUpScreen = (props) => {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCreds) => {
          //This is for RealTime Database Implementation on Firebase
          const db = getDatabase();
          set(ref(db, "users/" + userCreds.user.uid), {
            username: name,
            email: userCreds.user.email,
           
          });
          props.navigation.navigate("ViewFood");
          alert(" Logged In");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("FIELDS ARE EMPTY!");
    }
  };

  return (
    // <View style={styles.viewStyle}>
    //   <Card>
    //     <Card.Title>Welcome to Auth App</Card.Title>
    //     <Card.Divider />
    //     <Input
    //       placeholder="Name"
    //       onChangeText={(currentInput) => {
    //         setName(currentInput);
    //       }}
    //     />
    //     <Input
    //       placeholder="Student ID"
    //       onChangeText={(currentInput) => {
    //         setStudentID(currentInput);
    //       }}
    //     />
    //     <Input
    //       placeholder="Email"
    //       onChangeText={(currentInput) => {
    //         setEmail(currentInput);
    //       }}
    //     />
    //     <Input
    //       placeholder="Password"
    //       secureTextEntry
    //       onChangeText={(currentInput) => {
    //         setPassword(currentInput);
    //       }}
    //     />
    //     <Button
    //       title="Sign Up!"
    //       type="solid"
    //       onPress={() => {
    //         handleSignUp();
    //       }}
    //     />
    //     <Button
    //       title="Already Have an Account?"
    //       type="clear"
    //       onPress={() => {
    //         props.navigation.navigate("SignIn");
    //       }}
    //     />
    //   </Card>
    // </View>

    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="black"
          onChangeText={(currentInput) => {
            setName(currentInput);
          }}
        />
      </View>
    
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="black"
          onChangeText={(currentInput) => {
            setEmail(currentInput);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(currentInput) => {
            setPassword(currentInput);
          }}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          handleSignUp();
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4bacb8",
  },
  inputView: {
    backgroundColor: "#0096FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#5F9EA0",
  },
});

export default SignUpScreen;
