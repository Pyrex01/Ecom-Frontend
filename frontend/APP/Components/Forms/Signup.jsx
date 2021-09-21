import React, { useState } from "react";
import "react-native-gesture-handler";
import {} from "react-native-gesture-handler";
import Joi from "joi";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";

export default function SignUp() {
	let [name , setName] = useState("");
	let [email , setEmail] = useState("");
	let [password , setPass] = useState("");
	let [Cpass , setCPass] = useState("");
	return (
		<ScrollView>
			<SafeAreaView
				style={{
					paddingHorizontal: 40,
					flex: 1,
					backgroundColor: Colors.white,
				}}
			>
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

						<TextInput placeholder="Name" onChangeText={text => setName(text)} style={STYLES.input} />
					</View>
					<View style={STYLES.inputContainer}>
						<Icon
							name="mail-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>
						<TextInput placeholder="Email" onChangeText={text => setEmail(text)} style={STYLES.input} />
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
							onChangeText={text => setCPass(text)}
						/>
					</View>
					<TouchableOpacity onPress={()=>submit(name,email,password,Cpass)} >
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
					<TouchableOpacity onPress={() => ""}>
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
}


let schema = Joi.object({
	name:Joi.string().required().max(15).min(3),
	email:Joi.string().email({ tlds: { allow: false } }),
	password:Joi.string().required().alphanum().min(8).max(30),
	Cpass:Joi.ref('password')
})

function submit(name,email,password,Cpass){
	let result = schema.validate({name,email,password,Cpass})
	console.log(result.error)
}