import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	Platform,
	Text,
	StyleSheet,
	View,
	Image,
	SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../../Configs/Colors/Colors";
import { Style } from "../../Configs/Style/Style";
import { Styling } from "../../Configs/Style/Style";
import { PrimaryButton } from "../Sub Components/Button";

export default function OnBoardScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
				<ScrollView
					style={{
						flex: 1,
						paddingTop: StatusBar.currentHeight,
					}}
				>
					<View style={{ height: 600 }}>
						<Image
							style={(Style.Web, Style.Android)}
							source={require("../../assets/image.png")}
						/>
					</View>
					<View style={Style.textContainer}>
						<View>
							<Text
								style={{
									fontSize: 42,
									marginTop: -170,
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								Shopping Bazaar
							</Text>
							<Text
								style={{
									marginTop: 20,
									fontSize: 20,
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
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
