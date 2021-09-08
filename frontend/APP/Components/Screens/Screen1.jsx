import React from "react";
import { Text, View } from "react-native";

import { Styling } from "../../Configs/Style/Style";

export default function Home() {
	return (
		<View>
			<Text Style={Styling.text}>hello world</Text>
		</View>
	);
}
