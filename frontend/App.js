<<<<<<< HEAD
// import React from "react";
// import "react-native-gesture-handler";
// import * as encoding from "text-encoding";
// import { View, SafeAreaView } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import OnBoardScreen from "./APP/Components/Screens/OnBoardScreen";
// import Colors from "./APP/Configs/Colors/Colors";
// // import Test from "./APP/Components/Screens/Test";
// // import SignUp from "./APP/Components/Forms/Signup";
// // import AppTextInput from "./APP/Components/Sub Components/AppTextInput";
// // // import Login from "./APP/Components/Forms/Login";

// import BottomNavigator from "./APP/Components/Navigation/BotomNavigator";
// import Test from "./APP/Components/Screens/Test";
// import SignUp from "./APP/Components/Forms/Signup";
// import SignUpTest from "./APP/Components/Screens/SignUpTest";
// import CartScreen from "./APP/Components/Screens/CartScreen";
// import HomeScreen from "./APP/Components/Screens/HomeScreen";
// import DetailsScreen from "./APP/Components/Screens/DetailsScreen";
// // import Login from "./APP/Components/Forms/Login";

// const App = () => {
// 	return (
// 		<SafeAreaProvider>
// 			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
// 				<View>
// 					{/* <OnBoardScreen /> */}
// 					{/* <SignUp /> */}
// 					{/* <Login /> */}
// 					{/* {<Test />} */}
// 					{/* <SignUpTest /> */}
// 					{/* <HomeScreen /> */}
// 					<DetailsScreen />
// 				</View>
// 			</SafeAreaView>
// 		</SafeAreaProvider>
// 	);
// };

import "react-native-gesture-handler";
import React from "react";
import * as encoding from "text-encoding";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./APP/Configs/Colors/Colors";
import DetailsScreen from "./APP/Components/Screens/DetailsScreen";
import BottomNavigator from "./APP/Components/Navigation/BotomNavigator";
import OnBoardScreen from "./APP/Components/Screens/OnBoardScreen";
import SignUp from "./APP/Components/Forms/Signup";
import Login from "./APP/Components/Forms/Login";

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
=======
import React from 'react';
import "react-native-gesture-handler";
import * as encoding from "text-encoding";
import Android from "./APP/android/components/navigation";
import { Platform } from "react-native";


const App = () => {
	return <Android/>
	let component;
	switch(Platform.OS){
		case "android":
			return <Android/>
	}
>>>>>>> d64283549629e48f57522602acaa388f54063f9c
};

export default App;
