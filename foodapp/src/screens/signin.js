import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../components/button";
const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (auth) => {
    if (email && password) {
      const fireAuth = getAuth();
      signInWithEmailAndPassword(fireAuth, email, password)
        .then((userCreds) => {
          auth.setIsLoggedIn(true);
          auth.setCurrentUser(userCreds.user);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    } else {
      alert("FIELDS ARE EMPTY!");
    }
  };
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View>
          <Card>
            
            <Input
              placeholder="Email Address"
              onChangeText={(currentInput) => {
                setEmail(currentInput);
              }}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={(currentInput) => {
                setPassword(currentInput);
              }}
            />
            <Button
              title="Sign In!"
              type="solid"
              onPress={() => {
                handleSignIn(auth);
              }}
            />
            <Button
              title="Dont have an Account? Sign Up"
              type="clear"
              onPress={() => {
                props.navigation.navigate("SignUp");
              }}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});

export default SignInScreen;