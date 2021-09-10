import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Styling } from "../../Configs/Style/Style";
import image from "../../assets/image.png";
import { Device } from "../../Configs/Style/PlatformJson";

export default function Test() {
	return (
		<SafeAreaView>
			<View>
				<Image source={image} style={Device.MobileImage} />
				<Text style={Device.Mobile}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Voluptas, odit tempore? Aut laudantium repellat, facilis,
					assumenda eligendi ullam autem vel atque ut accusantium eius
					aliquid quo natus, dicta facere sit.
				</Text>
			</View>
		</SafeAreaView>
	);
}
