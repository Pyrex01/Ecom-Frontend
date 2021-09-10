import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Styling } from "../../Configs/Style/Style";
import image from "../../assets/image.png";

export default function Test() {
	return (
		<SafeAreaView>
			<View>
				<Image source={image} style={Styling.MobileImage} />
				<Text style={Styling.Mobile}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Voluptas, odit tempore? Aut laudantium repellat, facilis,
					assumenda eligendi ullam autem vel atque ut accusantium eius
					aliquid quo natus, dicta facere sit.
				</Text>
			</View>
		</SafeAreaView>
	);
}
