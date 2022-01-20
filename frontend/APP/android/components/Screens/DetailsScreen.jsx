import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image ,ActivityIndicator} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RouterLink, useNavigate, useParams } from "react-router-dom";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../Configs/Colors/Colors";
import { SecondaryButton } from "../Sub Components/Button";
import {navigationRef} from "./../Forms/Modal"
import axios from "axios";
import { mainBackend } from "../../../Configs/MainBackend";

function print(text) {
	return "data:image/png;base64," + text
}

const DetailsScreen = (props) => {
		let data = props.route.params.data
		return (
		<SafeAreaView style={{ backgroundColor: Colors.white }}>
			
			<View style={style.header}>
				<Icon
					name="arrow-back-ios"
					size={28}
					onPress={navigationRef.goBack}
				/>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Details
				</Text>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{	justifyContent: "center",	alignItems: "center",	height: 280,	}}	>
					<Image source={{uri:print(data.Display_Image)}} style={{ height: 220, width: 220 }}	/>
				</View>
				<View style={style.details}>
					<View style={{	flexDirection: "row",justifyContent: "space-between",	alignItems: "center",}}	>
						<Text style={{	fontSize: 25,		fontWeight: "bold",	color: Colors.white,}}>
							{data.Name}
						</Text>
						<View style={style.iconContainer}>
							<Icon
								name="favorite-border"
								color={Colors.primary}
								size={25}
							/>
						</View>
					</View>
					<Text style={style.detailsText}>
						{data.Product_details.description}
					</Text>
					<View style={{ marginTop: 40, marginBottom: 40 }}>
						<SecondaryButton title="Add To Cart" />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 20,
	},
	details: {
		paddingHorizontal: 20,
		paddingTop: 40,
		paddingBottom: 60,
		backgroundColor: Colors.primary,
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
	},
	iconContainer: {
		backgroundColor: Colors.white,
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	detailsText: {
		marginTop: 10,
		lineHeight: 22,
		fontSize: 16,
		color: Colors.white,
	},
});

export default DetailsScreen;
