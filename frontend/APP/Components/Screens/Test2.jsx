import React, { useState } from "react";

import "react-native-gesture-handler";
import {} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
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

import useForm from "../Forms/FormComponents/UseForm";
// import config from "../../../config.json";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";
import validate from "./../Forms/FormComponents/Validateinfo";

const Test2 = ({ navigation }) => {
	let [first_name, setFirstName] = useState("");
	let [last_name, setLastName] = useState("");
	let [phone, setPhone] = useState("");
	let [email, setEmail] = useState("");
	let [gender, setGender] = useState("");
	let [password, setPass] = useState("");
	let [ConfirmPass, setConfirmPass] = useState("");

	const { handleChange, values, errors, handleSubmit } = useForm(validate);

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
							name="first_name"
							placeholder="First Name"
							onChangeText={handleChange}
							values={values.first_name}
							style={STYLES.input}
						/>
						{/* <Text ref={NameError}> </Text> */}
					</View>
					<View style={STYLES.inputContainer}>
						<Icon
							name="person-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>

						<TextInput
							name="last_name"
							placeholder="Last Name"
							onChangeText={handleChange}
							values={values.last_name}
							style={STYLES.input}
						/>
						{/* <Text ref={NameError}> </Text> */}
					</View>
					<View style={STYLES.inputContainer}>
						<Icon
							name="phone"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>

						<TextInput
							name="phone"
							placeholder="Phone"
							onChangeText={handleChange}
							values={values.phone}
							style={STYLES.input}
						/>
						{/* <Text ref={NameError}> </Text> */}
					</View>
					<View style={STYLES.inputContainer}>
						<Icon
							name="mail-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>
						<TextInput
							name="email"
							placeholder="Email"
							onChangeText={handleChange}
							values={values.email}
							style={STYLES.input}
						/>
						<Text></Text>
					</View>

					<View style={STYLES.inputContainer}>
						<Icon
							name="lock-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>
						<TextInput
							name="password"
							placeholder="Password"
							style={STYLES.input}
							secureTextEntry
							onChangeText={handleChange}
							values={values.password}
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
							name="confirm_password"
							placeholder="Confirm Password"
							style={STYLES.input}
							secureTextEntry
							onChangeText={handleChange}
							values={values.confirm_password}
						/>
					</View>
					<TouchableOpacity>
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

// function submit(name, email, password, ConfirmPass) {}
/* function validate(values) {
	let errors = {};
	// first name
	if (!values.first_name.trim()) {
		errors.first_name = "First Name Required";
	}
	// last name
	if (!values.last_name.trim()) {
		errors.last_name = "Last Name Required";
	}
	// email
	if (!values.email.trim()) {
		errors.email = "Email Required";
	} else if (
		!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)
	) {
		errors.email = "Email id is invalid";
	}
	// Phone
	if (values.phone) {
		errors.phone = "Phone number is required";
	} else if (
		!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
			values.phone,
		)
	) {
		errors.phone = " Phone Number is not valid";
	}
	// gender
	if (values.gender) {
		errors.gender = "gender is not valid";
	}
	//password
	if (!values.password.trim()) {
		errors.password = "Password Required";
	} else if (values.password.length < 8) {
		errors.password = "Password needs at least 8 characters";
	}
	// confirm password
	if (values.confirm_password) {
		errors.confirm_password = "Confirm Password Required";
	} else if (values.confirm_password !== values.password) {
		errors.confirm_password = "Password does not match";
	}
	// photo
	if (values.photo) {
		errors.photo = "Enter your photo here";
	}
} */

export default Test2;
