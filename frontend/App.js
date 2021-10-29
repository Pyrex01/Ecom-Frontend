import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as encoding from "text-encoding";
import BottomNavigator from "./APP/Components/Navigation/BotomNavigator";
import DetailsScreen from "./APP/Components/Screens/DetailsScreen";
import OnBoardScreen from "./APP/Components/Screens/OnBoardScreen";
import SignUp from "./APP/Components/Forms/Signup";
import Login from "./APP/Components/Forms/Login";
import Colors from "./APP/Configs/Colors/Colors";
import HomeScreen from "./APP/Components/Screens/HomeScreen"

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="BoardScreen" component={OnBoardScreen} />
				<Stack.Screen name="Home" component={BottomNavigator} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="LogIn" component={Login} />
				<Stack.Screen name="DetailsScreen" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
