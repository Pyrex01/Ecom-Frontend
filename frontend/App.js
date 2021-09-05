import { StatusBar } from "expo-status-bar";
import React from "react";
import { styling } from "./Style/style.jsx";
import { Text, View } from "react-native";

export default function App() {
	return (
		<View style={styling.container}>
			<Text style={styling.text}>hello</Text>
			<StatusBar style="auto" />
		</View>
	);
}
