import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, View, Text, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Login() {
	return (
		<ScrollView>
			<SafeAreaProvider
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
						Welcome Back,
					</Text>
					<Text
						style={{
							fontSize: 19,
							textAlign: "center",
							fontWeight: "bold",
							color: Colors.grey,
						}}
					>
						Login to continue
					</Text>
				</View>

				<View style={{ marginTop: 20 }}>
					<View style={STYLES.inputContainer}>
						<Icon
							name="mail-outline"
							color={Colors.grey}
							size={20}
							style={STYLES.inputIcon}
						/>
						<TextInput placeholder="Email" style={STYLES.input} />
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
						/>
					</View>
					<TouchableOpacity onPress={() => ""}>
						<View style={STYLES.btnPrimary}>
							<Text
								style={{
									color: "#fff",
									fontWeight: "bold",
									fontSize: 20,
								}}
							>
								Log In
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
									Login with
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
									Login with
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
					<Text style={{ color: Colors.grey, fontWeight: "bold" }}>
						Don`t have an account ?
					</Text>
					<TouchableOpacity onPress={() => "SignUp"}>
						<Text
							style={{ color: Colors.pink, fontWeight: "bold" }}
						>
							Sign up
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaProvider>
		</ScrollView>
	);
}
