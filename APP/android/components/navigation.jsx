import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, SafeAreaView } from "react-native";
import OnBoardScreen from "./Screens/OnBoardScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import BottomNavigator from "./Navigation/BotomNavigator";
import SignUp from "./Forms/Signup";
import Login from "./Forms/Login";
import Colors from "../../Configs/Colors/Colors"
import React from 'react';

const Stack = createStackNavigator();



export default function Android (){
    return (
		<>
			<NavigationContainer>
				<StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="BoardScreen" component={OnBoardScreen} />
					<Stack.Screen name="Home" component={BottomNavigator} />
					<Stack.Screen name="LogIn" component={Login} />
					<Stack.Screen name="DetailsScreen" component={DetailsScreen} />
					<Stack.Screen name="SignUp" component={SignUp} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}