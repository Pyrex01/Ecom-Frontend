import "react-native-gesture-handler";
import React from "react";
import OnBoardScreen from "./APP/Components/Screens/OnBoardScreen";
//import Home from "./APP/Components/Screens/Home";
import { View, SafeAreaView, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./APP/Configs/Colors/Colors";
//import { PrimaryButton } from "./APP/Components/Sub Components/Button";

const App = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
				<ScrollView>
					<View>
						<OnBoardScreen />
						{/* <PrimaryButton /> */}
					</View>
					{/* <View>
						<Home />
					</View> */}
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
