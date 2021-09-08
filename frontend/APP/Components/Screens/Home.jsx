// import { StatusBar } from "expo-status-bar";
import React from "react";
// import Bgimg from "../../images/Background.jpeg";
// import Navbar from "../Sub Components/Navbar";
// import Icons from "../../assets/favicon.png";
// import { Styling } from "../../Configs/Style/Style";
// import { Button, Image, ImageBackground, Text, View } from "react-native";
// import { View } from "react-native";
import {PrimaryButton } from "../Sub Components/Button";
import { Button, View } from "react-native";

const Home = ({}) => {
	return (
		// <View style={Styling.container}>
		// 	<ImageBackground
		// 		source={Bgimg}
		// 		style={(Styling.Bgimg, Styling.container)}
		// 	>
		// 		<Image source={Icons} style={Styling.icon} />
		// 		<Text style={Styling.text}>Hello Darkness my Ol friend</Text>
		// 		<Text style={Styling.text}>
		// 			lOVcGUoRxcEcfyvFMAnDgaF1VWwl Lorem Ipsum is simply dummy
		// 			text of the printing and typesetting industry. Lorem Ipsum
		// 			has been the industry's standard dummy text ever since the
		// 			1500s, when an unknown printer took a galley of type and
		// 			scrambled it to make a type specimen book. It has survived
		// 			not only five centuries, but also the leap into electronic
		// 			typesetting, remaining essentially unchanged. It was
		// 			popularised in the 1960s with the release of Letraset sheets
		// 			containing Lorem Ipsum passages, and more recently with
		// 			desktop publishing software like Aldus PageMaker including
		// 			versions of Lorem Ipsum.
		// 		</Text>
		// 		<Navbar />

		// 		<StatusBar style="auto" />
		// 	</ImageBackground>
		// </View>
		<View>
			<PrimaryButton title="Click Me"/>
			<Button/>
		</View>
	);
}
export default Home;