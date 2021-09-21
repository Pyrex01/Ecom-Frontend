import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";
import { SignupStyle } from "../../Configs/Style/SignUpStyle";
import { Device } from "../../Configs/Style/PlatformJson";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(8).label("Password"),
});

export default function Test() {
	return (
		<ScrollView>
			<SafeAreaView style={(SignupStyle.SafeAreaView, Device.SignupPage)}>
				<View style={{ flexDirection: "row", marginTop: 60 }}>
					<Text style={SignupStyle.Shopping}>Shopping</Text>
					<Text style={SignupStyle.Bazaar}>Bazaar</Text>
				</View>
				<View style={{ marginTop: 40 }}>
					<Text style={SignupStyle.Welcome}>Welcome...</Text>
					<Text style={SignupStyle.Continue}>
						Sign up to continue
					</Text>
				</View>
				<View style={{ marginTop: 20 }}>
					<Formik
						initailValues={{
							name: "",
							email: "",
							password: "",
							password: "",
						}}
						onSubmit={values => console.log(values)}
						validationSchema={validationSchema}
					>
						{({ handleChange, handleSubmit, errors }) => (
							<>
								<View style={STYLES.inputContainer}>
									<Icons
										name="person-outline"
										color={Colors.grey}
										size={20}
										style={STYLES.inputIcon}
									/>
									<TextInput
										placeholder="Name"
										style={STYLES.input}
										clearButtonMode="always"
										autoCompleteType="name"
									/>
								</View>
								<View style={STYLES.inputContainer}>
									<Icons
										name="mail-outline"
										color={Colors.grey}
										size={20}
										style={STYLES.inputIcon}
									/>
									<TextInput
										style={STYLES.input}
										placeholder="Email"
										keyboardType="email-address"
										autoCompleteType="email"
										onChangeText={handleChange("email")}
										autoCorrect={false}
										autoCapitalize="none"
										textContentType="emailAddress"
									/>
									<Text style={{ color: Colors.danger }}>
										{errors.email}
									</Text>
								</View>
								<View style={STYLES.inputContainer}>
									<Icons
										name="lock-outline"
										color={Colors.grey}
										size={20}
										style={STYLES.inputIcon}
									/>

									<TextInput
										style={STYLES.input}
										placeholder="Password"
										secureTextEntry
										autoCompleteType="password"
										onChangeText={handleChange("password")}
										autoCorrect={false}
										autoCapitalize="none"
										textContentType="Password"
									/>
									<Text style={{ color: Colors.danger }}>
										{errors.password}
									</Text>
								</View>
								<View style={STYLES.inputContainer}>
									<Icons
										name="lock-outline"
										color={Colors.grey}
										size={20}
										style={STYLES.inputIcon}
									/>
									<TextInput
										style={STYLES.input}
										placeholder="Comfirm Password"
										secureTextEntry
										autoCompleteType="password"
										onChangeText={handleChange("password")}
										autoCorrect={false}
										autoCapitalize="none"
										textContentType="Password"
									/>
									<Text style={{ color: Colors.danger }}>
										{errors.password}
									</Text>
								</View>
								<TouchableOpacity>
									<View style={STYLES.btnPrimary}>
										<Text
											style={SignupStyle.SignupBtn}
											onPress={handleSubmit}
										>
											Sign Up
										</Text>
									</View>
								</TouchableOpacity>
							</>
						)}
					</Formik>

					<View style={SignupStyle.SignUpOr}>
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
				<View style={SignupStyle.AlreadyHaveAccView}>
					<Text style={SignupStyle.AlreadyHaveAcc}>
						Already have an account?
					</Text>
					<TouchableOpacity onPress={() => ""}>
						<Text style={SignupStyle.LoginBtn}> Login</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
}
