import { StyleSheet } from "react-native";
import { Colors } from "../Colors/Colors";

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
		color: Colors.secondary,
		fontFamily: "cursive",
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
});

export { Styling };
