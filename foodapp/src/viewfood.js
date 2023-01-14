import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";

const image = {
  uri: "https://i.pinimg.com/originals/29/01/79/290179e7ee286751a4b0332087583ad6.jpg",
};

const ViewFood = (props) => {

  const [food, setFood] = useState([
    { name: "Kabab ", id: "1" },
    { name: "Fried Rice ", id: "2" },
    { name: "Chicken Fry   ", id: "3" },
    { name: " Kacchi", id: "4" },
    { name: "Chicken Biriyani  ", id: "5" },
    { name: "Pizza", id: "6" },
    { name: "Burger", id: "7" },
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
   

      <FlatList
        keyExtractor={(item) => {
          item.id;
        }}
        data={food}
        renderItem={({ item }) => (
          <View>
            <Card style={styles.view}>
              <View>
                <Text
                  style={styles.text}
                  onPress={() => props.navigation.navigate("Fourth")}
                >
                  {item.name}
                </Text>
              </View>

              <View>
                <Button
                  color="black"
                  title={item.name}
                  style={{ height: 100 }}
                  onPress={() => props.navigation.navigate("BuyFood")}
                />
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#CCCCFF",
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:40
  },
 
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 900,
  },
  text: {
    padding: 10,
    //backgroundColor: "white",
    fontSize: 30,
  },
  
 
 


  view: {
   backgroundColor: "red",
    flexDirection: "column",
    width: 250,
    marginLeft: 70,
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

export default ViewFood;
