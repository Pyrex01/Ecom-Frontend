import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors.jsx";
import { Platform } from "react-native";

const Device = StyleSheet.create({
	Mobile: {
		/* flex: 1, */
		...Platform.select({
			android: {
				backgroundColor: "green",
				color: "red",
				alignItems: "center",
				justifyContent: "center",
				fontWeight: "bold",
				fontSize: 30,
			},
			ios: {
				backgroundColor: "red",
			},
			default: {
				backgroundColor: "blue",
				color: "white",
				fontWeight: "bold",
				fontSize: 50,
			},
		}),
	},

	MobileImage: {
		...Platform.select({
			android: {
				height: 300,
				width: 400,
			},
			ios: {},
			default: {
				height: 700,
				width: "full",
			},
		}),
	},
});

export { Device };
