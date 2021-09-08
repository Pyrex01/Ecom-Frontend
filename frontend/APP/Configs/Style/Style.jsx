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
<<<<<<< HEAD
		fontSize: 20,
=======
>>>>>>> 8ead5e80816a8ce43ba1a2194e4018a36c2022e6
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
