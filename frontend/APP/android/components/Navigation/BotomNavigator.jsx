import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../Configs/Colors/Colors";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "../Forms/Signup";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
	return (
		<Tab.Navigator
		screenOptions={{
				style: {
					height: 55,
					borderTopWidth: 0,
					elevation: 0,
				},
				showLabel: false,
				activeTintColor: Colors.primary,
			}}
		>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon name="home-filled" color={color} size={28} />
					),
				}}
			/>
			<Tab.Screen
				name="My Account"
				component={SignUp}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon name="account-circle" color={color} size={28} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon name="search" color={color} size={28} />
					),
				}}
			/>
			<Tab.Screen
				name="My Cart"
				component={CartScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon name="shopping-cart" color={color} size={28} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
export default BottomNavigator;
