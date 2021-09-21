import React from "react";
import "react-native-gesture-handler";
import { View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import OnBoardScreen from "./APP/Components/Screens/OnBoardScreen";
import Colors from "./APP/Configs/Colors/Colors";
<<<<<<< HEAD
// import Test from "./APP/Components/Screens/Test";
// import SignUp from "./APP/Components/Forms/Signup";
// import AppTextInput from "./APP/Components/Sub Components/AppTextInput";
// // import Login from "./APP/Components/Forms/Login";

import BottomNavigator from "./APP/Components/Navigation/BotomNavigator";
=======
import Test from "./APP/Components/Screens/Test";
import SignUp from "./APP/Components/Forms/Signup";
import SignUpTest from "./APP/Components/Screens/SignUpTest";
// import Login from "./APP/Components/Forms/Login";
>>>>>>> b1ee83315fd0d77d46dddd456cfd65342233bda1

const App = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
				<View>
					{/* <OnBoardScreen /> */}
					<SignUp />
					{/* <Login /> */}
					{/* {<Test />} */}
<<<<<<< HEAD
					{/* <AppTextInput>
						<TextInput placeholder="email" />
					</AppTextInput> */}
					<BottomNavigator />
=======
					{/* <SignUpTest /> */}
>>>>>>> b1ee83315fd0d77d46dddd456cfd65342233bda1
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
