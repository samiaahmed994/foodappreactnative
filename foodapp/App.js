import Home from "./src/screens/home";
import ViewFood from "./src/viewfood";
import postfood from "./src/screens/postfood";
import BuyFood from "./src/screens/buyfood";
import Accept from "./src/screens/accept";
import SignUpScreen from "./src/screens/signup";
import SignInScreen from "./src/screens/signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewFood" component={ViewFood} />
        <Stack.Screen name="postfood" component={postfood} />
        <Stack.Screen name="BuyFood" component={BuyFood} />
        <Stack.Screen name="Accept" component={Accept} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
