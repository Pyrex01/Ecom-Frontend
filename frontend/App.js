import React from "react";
import "react-native-gesture-handler";
import OnBoardScreen from "./APP/Components/Screens/OnBoardScreen";
import { View, SafeAreaView, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./APP/Configs/Colors/Colors";
import Test from "./APP/Components/Screens/Test";
import SignUp from "./APP/Components/Forms/Signup";
import AppTextInput from "./APP/Components/Sub Components/AppTextInput";
// import Login from "./APP/Components/Forms/Login";

const App = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
				<View>
					{/* <OnBoardScreen /> */}
					{/* <SignUp /> */}
					{/* <Login /> */}
					{/* {<Test />} */}
					<AppTextInput placeholder="Username" Icons="mail-outline" />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
