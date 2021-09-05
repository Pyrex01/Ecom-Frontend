import { StyleSheet } from "react-native";

// we are goin to write all the CSS in JSON form here!!!
/* 

example "  <View style={basic.container}>  " 
    - basic.ObjectName

*/
const styling = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "red",
		fontWeight: "bold",
	},
});

export { styling };
