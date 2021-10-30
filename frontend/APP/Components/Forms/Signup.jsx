import React, { useState } from "react";

import "react-native-gesture-handler";
import {} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-community/async-storage";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Alert,
	Picker,
	Modal,
	Button,
} from "react-native";
import * as axios from "axios";

import { mainBackend } from "../../Configs/MainBackend";
import config from "../../../config.json";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";

const Test2 = ({ navigation }) => {
	let [first_name, setFirstName] = useState("");
	let [last_name, setLastName] = useState("");
	let [phone, setPhone] = useState("");
	let [email, setEmail] = useState("");
	let [gender, setGender] = useState("");
	let [password, setPassword] = useState("");
	let [photo, setPhoto] = useState("");
	let [confirm_password, setConfirm_Password] = useState("");
	let [first_namelog, setFirstNameLog] = useState("");
	let [last_namelog, setLastNameLog] = useState("");
	let [phonelog, setPhoneLog] = useState("");
	let [emaillog, setEmailLog] = useState("");
	let [genderlog, setGenderLog] = useState("");
	let [passwordlog, setPasswordLog] = useState("");
	let [confirm_passwordlog, setConfirmPasswordLog] = useState("");
	let [otp, SetOtp] = useState("");
	let [otpwarning, Setotpwarning] = useState("");
	let [isVisible, SetIsVisible] = useState(true);
	// const [selectedValue, setSelectedValue] = useState("1,2,0");
	let user_Data = {
		first_name,
		last_name,
		phone,
		email,
		gender,
		password,
		confirm_password,
		photo,
	};
	let log_Setters = {
		setFirstNameLog,
		setLastNameLog,
		setPhoneLog,
		setEmailLog,
		setGenderLog,
		setPasswordLog,
		setConfirmPasswordLog,
		SetIsVisible,
	};
	// const { handleChange, values, errors, handleSubmit } = useForm(validate);

	return (
		<SafeAreaView
			style={{
				paddingHorizontal: 40,
				flex: 1,
				backgroundColor: Colors.white,
			}}
		>
			<SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
				<View style={style.header}>
					<Icon
						name='arrow-back-ios'
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
						name='person-outline'
						color={Colors.grey}
						size={20}
						style={STYLES.inputIcon}
					/>

					<TextInput
						name='first_name'
						placeholder='First Name'
						onChangeText={text => setFirstName(text)}
						// values={values.first_name}
						style={STYLES.input}
					/>
				</View>
				<View>
					<Text>{first_namelog}</Text>
				</View>
				<View style={STYLES.inputContainer}>
					<Icon
						name='person-outline'
						color={Colors.grey}
						size={20}
						style={STYLES.inputIcon}
					/>

					<TextInput
						name='last_name'
						placeholder='Last Name'
						onChangeText={text => setLastName(text)}
						// values={values.last_name}
						style={STYLES.input}
					/>
					{/* <Text ref={NameError}> </Text> */}
				</View>
				<View>
					<Text>{last_namelog}</Text>
				</View>
				<View style={STYLES.inputContainer}>
					<Icon
						name='person-outline'
						color={Colors.grey}
						size={20}
						style={STYLES.inputIcon}
					/>

					<Picker
						selectedValue={gender}
						style={{ height: 50, width: 150 }}
						onValueChange={(itemValue, itemIndex) =>
							setGender(itemValue)
						}
					>
						<Picker.Item label='Select' value='' />
						<Picker.Item label='Male' value='1' />
						<Picker.Item label='Female' value='2' />
						<Picker.Item label='Others' value='0' />
					</Picker>

					{/* <TextInput
							name="gender"
							placeholder="Gender"
							onChangeText={text => setGender(text)}
							// values={values.last_name}
							style={STYLES.input}
						/>
						<Text ref={NameError}> </Text> */}
				</View>
				<View>
					<Text>{genderlog}</Text>
				</View>
				<View style={STYLES.inputContainer}>
					<Icon
						name='phone'
						color={Colors.grey}
						size={20}
						style={STYLES.inputIcon}
					/>

					<TextInput
						name='phone'
						placeholder='Phone'
						onChangeText={text => setPhone(text)}
						// values={values.phone}
						style={STYLES.input}
						autoCompleteType='tel'
						keyboardType='number-pad'
					/>
				</View>
				<View>
					<Text>{phonelog}</Text>
				</View>
				<View style={STYLES.inputContainer}>
					<Icon
						name='mail-outline'
						color={Colors.grey}
						size={20}
						style={STYLES.inputIcon}
					/>
					<TextInput
						name='email'
						placeholder='Email'
						onChangeText={text => setEmail(text)}
						// values={values.email}
						style={STYLES.input}
						keyboardType='email-address'
						autoCompleteType='email'
						autoCorrect={false}
						autoCapitalize='none'
						textContentType='emailAddress'
					/>
				</View>
				<View>
					<Text>{emaillog}</Text>
				</View>
				<View style={STYLES.inputContainer}>
					<Icon
						name='lock-outline'
						color={Colors.grey}
						size={20}
						style={STYLES.inputIcon}
					/>
					<TextInput
						name='password'
						placeholder='Password'
						style={STYLES.input}
						secureTextEntry
						onChangeText={text => setPassword(text)}
						// values={values.password}
						autoCorrect={false}
						autoCapitalize='none'
						textContentType='Password'
						autoCompleteType='password'
					/>
				</View>
				<View>
					<Text>{passwordlog}</Text>
				</View>
				<View style={STYLES.inputContainer}>
					<Icon
						name='lock-outline'
						color={Colors.grey}
						size={20}
						style={STYLES.inputIcon}
					/>
					<TextInput
						name='confirm_password'
						placeholder='Confirm Password'
						style={STYLES.input}
						secureTextEntry
						onChangeText={text => setConfirm_Password(text)}
						// values={values.confirm_password}
						autoCorrect={false}
						autoCapitalize='none'
						textContentType='Password'
						autoCompleteType='password'
					/>
				</View>
				<View>
					<Text>{confirm_passwordlog}</Text>
				</View>
				<TouchableOpacity>
					<View style={STYLES.btnPrimary}>
						<Text
							style={{
								color: "#fff",
								fontWeight: "bold",
								fontSize: 20,
							}}
							onPress={() => submit(user_Data, log_Setters)}
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
					<Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>
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
							<Text style={{ fontWeight: "bold", fontSize: 18 }}>
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
							<Text style={{ fontWeight: "bold", fontSize: 18 }}>
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
				<TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
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
			<View style={STYLES.otpinputContainer}>
				<Modal visible={isVisible}>
					<Text>Enter Your Six digit OTP here!</Text>
					<TextInput
						placeholder='######'
						onChangeText={text => SetOtp(text)}
					/>
					<Text style={{ color: Colors.danger }}>{otpwarning}</Text>
					<TouchableOpacity
						onPress={() => otpSubmit(otp, Setotpwarning)}
					>
						<Text
							style={{
								color: Colors.secondary,
								fontSize: 18,
								fontWeight: "bold",
							}}
						>
							Submit
						</Text>
					</TouchableOpacity>
				</Modal>
			</View>
		</SafeAreaView>
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

function otpSubmit(otp, setotpwarning) {
	if (isNaN(otp)) {
		setotpwarning("please enter valid number");
		return;
	}
	AsyncStorage.getItem("signup_token", (err, result) => {
		mainBackend
			.post("/user/confirm/", { token: result, otp: otp })
			.then(function (response) {
				switch (response.status) {
					case 202:
						alert("signup success");
						Alert.alert("signup success");
						break;
					case 410:
						alert("otp time expired try again");
						Alert.alert("otp time expired try again");
					case 400:
						alert("oops something went wrong!");
						Alert.alert("oops something went wrong!");
				}
			});
	});
}

// function submit(name, email, password, ConfirmPass) {}
function validation(values) {
	let result = {};
	result.is_error = false;
	let phone_pattern =
		/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	// !first name
	if (values.first_name == "") {
		result.is_error = true;
		result.first_namelog = "First Name Required";
	}
	// !last name
	if (values.last_name == "") {
		result.is_error = true;
		result.last_namelog = "Last Name Required";
	}
	// !gender
	if (values.gender == "") {
		result.is_error = true;
		result.genderlog = "Please select the gender";
	} /* else if (
		!values.gender == 1 ||
		!values.gender == 2 ||
		!values.gender == 0
	) {
	} */
	// !Phone
	if (values.phone == "") {
		result.is_error = true;
		result.phonelog = "Phone number is required";
	} else if (!phone_pattern.test(values.phone)) {
		result.is_error = true;
		result.phonelog = " Phone Number is not valid";
	}
	// !email
	if (!email_pattern.test(values.email)) {
		result.is_error = true;
		result.emaillog = "Email id is invalid";
	}

	/* // !password */
	if (values.password == "") {
		result.is_error = true;
		result.passwordlog = "Password Required";
	} else if (values.password.length < 8) {
		result.is_error = true;
		result.passwordlog = "Password needs at least 8 characters";
	}
	// !confirm password
	if (values.confirm_password == "") {
		result.is_error = true;
		result.confirm_passwordlog = "Confirm Password Required";
	} else if (values.confirm_password !== values.password) {
		result.is_error = true;
		result.confirm_passwordlog = "Password does not match";
	}

	/* // !photo
	if (values.photo == "") {
		result.photo = "Enter your photo here";
	} */
	return result;
}

function submit(user_Data, log_Setters) {
	let result = validation(user_Data);
	if (result.is_error) {
		log_Setters.setFirstNameLog(result.first_namelog);
		log_Setters.setLastNameLog(result.last_namelog);
		log_Setters.setEmailLog(result.emaillog);
		log_Setters.setPhoneLog(result.phonelog);
		log_Setters.setGenderLog(result.genderlog);
		log_Setters.setPasswordLog(result.passwordlog);
		log_Setters.setConfirmPasswordLog(result.confirm_passwordlog);
	} else {
		log_Setters.setFirstNameLog("");
		log_Setters.setLastNameLog("");
		log_Setters.setEmailLog("");
		log_Setters.setPhoneLog("");
		log_Setters.setGenderLog("");
		log_Setters.setPasswordLog("");
		log_Setters.setConfirmPasswordLog("");

		mainBackend
			.post("/user/signup/", {
				First_Name: user_Data.first_name,
				Second_Name: user_Data.last_name,
				Email: user_Data.email,
				Gender: user_Data.gender,
				Photo: "-",
				password: user_Data.password,
				Phone: user_Data.phone,
			})
			.then(function (response) {
				console.log(response.status);
				if (response.status == 201) {
					if (
						AsyncStorage.setItem(
							"signup_token",
							response.data.signup_token,
						)
					) {
						log_Setters.SetIsVisible(true);
					}
				}
				if (response.status >= 400 && response.status < 500) {
					Alert.alert("oops! something went wrong");
				}
			});
	}
}

export default Test2;
