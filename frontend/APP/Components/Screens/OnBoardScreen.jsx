import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	Platform,
	Text,
	StyleSheet,
	View,
	Image,
	SafeAreaView,
	ViewBase,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../../Configs/Colors/Colors";
import { Style } from "../../Configs/Style/Style";
import { Styling } from "../../Configs/Style/Style";
import image from "../../assets/image.png";
import { PrimaryButton } from "../Sub Components/Button";

export default function OnBoardScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
				{/* <ScrollView
					style={{
						flex: 1,
						paddingTop: StatusBar.currentHeight,
					}}
				> */}
				<View style={{ height: 650 }}>
					<Image
						style={Style.Android}
						source={/* require("../../assets/image.png") */ image}
					/>
				</View>
				<View style={Style.textContainer}>
					<View>
						<Text
							style={{
								fontSize: 32,
								fontWeight: "bold",
								textAlign: "center",
							}}
						>
							Shopping Bazaar
						</Text>
						<Text
							style={{
								marginTop: 20,
								fontSize: 18,
								textAlign: "center",
								color: Colors.grey,
							}}
						>
							We help you to find the best
						</Text>
					</View>
					<View style={Style.indicatorContainer}>
						<View style={Style.currentIndicator} />
						<View style={Style.indicator} />
						<View style={Style.indicator} />
					</View>
					<View style={Style.PrimaryButton}>
						<PrimaryButton title="Get Started" />
					</View>
				</View>
				{/* <View style={Styling.container}>
						<Text style={Styling.text}>
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Beatae eum quidem nulla laboriosam dolore
							incidunt, ratione reiciendis, aut ipsum fugit
							eligendi, maxime corporis debitis veniam hic
							pariatur quaerat officiis? Animi.
						</Text>
					</View> */}
				{/* </ScrollView> */}
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
