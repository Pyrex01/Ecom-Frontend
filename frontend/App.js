import "react-native-gesture-handler";
import React from "react";
import OnBoardScreen from "./APP/Components/Screens/OnBoardScreen";
import { View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./APP/Configs/Colors/Colors";
// import Test from "./APP/Components/Screens/Test";
import SignUp from "./APP/Components/Forms/Signup";
// import Login from "./APP/Components/Forms/Login";

const App = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
				<View>
					{/* <OnBoardScreen /> */}
					<SignUp />
					{/* <Login /> */}
					{/* {<Test />} */}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
