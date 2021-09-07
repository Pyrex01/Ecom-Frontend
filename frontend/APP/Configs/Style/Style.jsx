import { StyleSheet } from "react-native";
import { Colors } from "../Colors/Colors";

// we are goin to write all the CSS in JSON form here!!!
/* 

example "  <View style={basic.container}>  " 
    - basic.ObjectName

*/

const styling = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.secondary,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontWeight: "bold",
		color: Colors.medium,
		fontFamily: "cursive",
	},
	Bgimg: {
		height: "100%",
		width: "100%",
	},
});

export { styling };
