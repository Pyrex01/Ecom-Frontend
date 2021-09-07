import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "../Sub Components/Navigation.jsx";
import { styling } from "../../Configs/Style/Style.jsx";
import { Image, Text, View } from "react-native";

export default function Home() {
	return (
		<View style={styling.container}>
			<Text style={styling.text}>Hello Darkness my Ol friend</Text>
			<Text style={styling.text}>
				lOVcGUoRxcEcfyvFMAnDgaF1VWwl Lorem Ipsum is simply dummy text of
				the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an
				unknown printer took a galley of type and scrambled it to make a
				type specimen book. It has survived not only five centuries, but
				also the leap into electronic typesetting, remaining essentially
				unchanged. It was popularised in the 1960s with the release of
				Letraset sheets containing Lorem Ipsum passages, and more
				recently with desktop publishing software like Aldus PageMaker
				including versions of Lorem Ipsum.
			</Text>
			<Image src={require("../../assets/favicon.png")}/>
			<Navigation />
			<StatusBar style="auto" />
		</View>
	);
}
