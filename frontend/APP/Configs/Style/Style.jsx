import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors.jsx";
import { Platform } from "react-native";
// we are goin to write all the CSS in JSON form here!!!
/* 

example "  <View style={basic.container}>  " 
    - basic.ObjectName

*/

const Styling = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.rbga,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontWeight: "bold",
		fontSize: 20,
		color: Colors.secondary,
		/* fontFamily: "cursive", */
		backgroundColor: "rgba(0, 23, 255, 0.5)",
	},
	Bgimg: {
		height: "100%",
		width: "100%",
	},
	icon: {
		height: 80,
		width: 100,
	},
	Mobile: {
		flex: 1,
		...Platform.select({
			android: {
				backgroundColor: "green",
			},
			ios: {
				backgroundColor: "red",
			},
			default: {
				// other platforms, web for example
				backgroundColor: "blue",
			},
		}),
	},
});

/* OnBoardSreen Json css */
/*
const Style = StyleSheet.create({
	textContainer: {
		flex: 1,
		paddingHorizontal: 50,
		justifyContent: "space-between",
		paddingBottom: 40,
	},
	indicatorContainer: {
		height: 50,
		flex: 1,
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		top: 70, 
		backgroundColor: Colors.rbga,
	},
	currentIndicator: {
		height: 12,
		width: 30,
		borderRadius: 10,
		backgroundColor: Colors.primary,
		marginHorizontal: 5,
	},
	indicator: {
		height: 12,
		width: 12,
		borderRadius: 6,
		backgroundColor: Colors.grey,
		marginHorizontal: 5,
	},
		Web: {
		height: Platform.OS == "native" ? 1900 : 1900,
		width: "100%",
		resizeMode: "contain",

		top: -500,
	}, 
	Android: {
		height: Platform.OS == "android" ? 1000 : 800,
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		top: -150,
	},

	PrimaryButton: {
		top: 110,
	},
});*/

export { Styling, Style };
