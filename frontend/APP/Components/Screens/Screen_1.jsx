import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import icons from "../../assets/icon.png";
import { styling } from "../../Configs/Style/Style";
import Bgimg from "../../images/Background.jpeg";

export default function Home() {
	return (
		<ImageBackground source={Bgimg} style={styling.Bgimg}>
			<View>
				<Image source={icons}></Image>
				<Text>hello world</Text>
			</View>
		</ImageBackground>
	);
}
