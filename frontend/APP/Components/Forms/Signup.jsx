import React, { useState } from "react";
import "react-native-gesture-handler";
import { } from "react-native-gesture-handler";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";

<<<<<<< HEAD
var NameError = React.createRef();
=======
>>>>>>> 333a9102ad9075e79ec0a259093b365a28b681d0

const SignUp = ({ navigation }) => {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [password, setPass] = useState("");
<<<<<<< HEAD
	let [ConfirmPass, setConfirmPass] = useState("");
=======
	let [Cpass, setCPass] = useState("");
	let [NameMsg, setNameMsg] = useState("");

	let vriable = {
		name,email,password,Cpass
	}
	let callbackfunctions = {
		setNameMsg
	}
>>>>>>> 333a9102ad9075e79ec0a259093b365a28b681d0
	return (
		<ScrollView>
			<SafeAreaView
				style={{
					paddingHorizontal: 40,
					flex: 1,
					backgroundColor: Colors.white,
				}}
			>
				<SafeAreaView
					style={{ backgroundColor: Colors.white, flex: 1 }}
				>
					<View style={style.header}>
						<Icon
							name="arrow-back-ios"
							size={28}
							onPress={navigation.goBack}
						/>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							SignUp
						</Text>
					</View>
				</SafeAreaView>
				<View style={{ flexDirection: "row", marginTop: 60 }}>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: 32,
							color: Colors.dark,
						}}
					>
						Shopping
					</Text>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: 32,
							color: Colors.secondary,
						}}
					>
						Bazaar
					</Text>
				</View>

				<View style={{ marginTop: 40 }}>
					<Text
						style={{
							fontSize: 42,
							textAlign: "center",
							fontWeight: "bold",
							color: Colors.dark,
						}}
					>
						Welcome...
					</Text>
					<Text
						style={{
							fontSize: 19,
							textAlign: "center",
							fontWeight: "bold",
							color: Colors.grey,
						}}
					>
						Sign up to continue
					</Text>
				</View>
				<View style={{ marginTop: 20 }}>
					<View style={STYLES.inputContainer}>
						<Icon
							name="person-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>

						<TextInput
							placeholder="Name"
							onChangeText={text => setName(text)}
							style={STYLES.input}
						/>
<<<<<<< HEAD
						<Text ref={NameError}> </Text>
=======
						<Text >{NameMsg}</Text>
>>>>>>> 333a9102ad9075e79ec0a259093b365a28b681d0
					</View>
					<View style={STYLES.inputContainer}>
						<Icon
							name="mail-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>
						<TextInput
							placeholder="Email"
							onChangeText={text => setEmail(text)}
							style={STYLES.input}
						/>
						<Text ></Text>
					</View>
					<View style={STYLES.inputContainer}>
						<Icon
							name="lock-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>
						<TextInput
							placeholder="Password"
							style={STYLES.input}
							secureTextEntry
							onChangeText={text => setPass(text)}
						/>
					</View>
					<View style={STYLES.inputContainer}>
						<Icon
							name="lock-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>
						<TextInput
							placeholder="Comfirm Password"
							style={STYLES.input}
							secureTextEntry
							onChangeText={text => setConfirmPass(text)}
						/>
					</View>
					<TouchableOpacity
<<<<<<< HEAD
						onPress={() =>
							submit(name, email, password, ConfirmPass)
						}
=======
						onPress={() => submit(vriable,callbackfunctions)}
>>>>>>> 333a9102ad9075e79ec0a259093b365a28b681d0
					>
						<View style={STYLES.btnPrimary}>
							<Text
								style={{
									color: "#fff",
									fontWeight: "bold",
									fontSize: 20,
								}}
							>
								Sign Up
							</Text>
						</View>
					</TouchableOpacity>
					<View
						style={{
							marginVertical: 20,
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<View style={STYLES.line}></View>
						<Text
							style={{ marginHorizontal: 5, fontWeight: "bold" }}
						>
							OR
						</Text>
						<View style={STYLES.line}></View>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View style={STYLES.btnSecondary}>
							<TouchableOpacity onPress={() => ""}>
								<Text
									style={{ fontWeight: "bold", fontSize: 18 }}
								>
									Sign up with
									<Image
										style={STYLES.btnImage}
										source={require("../../assets/facebook.png")}
									/>
								</Text>
							</TouchableOpacity>
						</View>
						<View style={{ width: 10 }}></View>
						<View style={STYLES.btnSecondary}>
							<TouchableOpacity onPress={() => ""}>
								<Text
									style={{ fontWeight: "bold", fontSize: 18 }}
								>
									Sign up with
									<Image
										style={STYLES.btnImage}
										source={require("../../assets/google.png")}
									/>
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "flex-end",
						justifyContent: "center",
						marginTop: 40,
						marginBottom: 20,
					}}
				>
					<Text
						style={{
							color: Colors.grey,
							fontSize: 18,
							fontWeight: "bold",
						}}
					>
						Already have an account ?
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("LogIn")}
					>
						<Text
							style={{
								color: Colors.black,
								fontSize: 18,
								fontWeight: "bold",
							}}
						>
							Login
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};
const style = StyleSheet.create({
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 1,
		marginTop: 10,
	},
});

<<<<<<< HEAD
let schema = Joi.object({
	name: Joi.string().required().max(15).min(3),
	email: Joi.string().email({ tlds: { allow: false } }),
	password: Joi.string().required().alphanum().min(8).max(30),
	ConfirmPass: Joi.ref("password"),
});

function submit(name, email, password, ConfirmPass) {
	let result = schema.validate({ name, email, password, ConfirmPass });
	console.log(result.error);
=======

function submit(varialbles, callback) {
	if(varialbles.name == "") {
		callback.setNameMsg("Name cannot be empty")
	}

	if(length(varialbles.password) < 8)
>>>>>>> 333a9102ad9075e79ec0a259093b365a28b681d0
}

export default SignUp;