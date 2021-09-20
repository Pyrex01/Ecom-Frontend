import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
	SafeAreaView,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Text,
} from "react-native";
import STYLES from "../../Configs/Style/formStyles";
import Colors from "../../Configs/Colors/Colors";
import { SignupStyle } from "../../Configs/Style/SignUpStyle";
import { Device } from "../../Configs/Style/PlatformJson";
import AppFormField from "../Sub Components/AppFormField";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(8).label("Password"),
	confirm_password: Yup.string().required().min(8).label("Confirm Password"),
});

export default function SignUpTest() {
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
							confirm_password: "",
						}}
						onSubmit={values => console.log(values)}
						validationSchema={validationSchema}
					>
						{({ handleSubmit }) => (
							<>
								<AppFormField
									name="name"
									placeholder="Name*"
									clearButtonMode="always"
									autoCompleteType="name"
									Icons="person-outline"
								/>

								<AppFormField
									name="email"
									placeholder="Email*"
									keyboardType="email-address"
									autoCompleteType="email"
									autoCorrect={false}
									autoCapitalize="none"
									textContentType="emailAddress"
									Icons="mail-outline"
								/>

								<AppFormField
									name="password"
									placeholder="Password*"
									secureTextEntry
									autoCompleteType="password"
									autoCorrect={false}
									autoCapitalize="none"
									textContentType="Password"
									Icons="lock-outline"
								/>

								<AppFormField
									name="confirm_password"
									placeholder="Confirm Password*"
									secureTextEntry
									autoCompleteType="password"
									autoCorrect={false}
									autoCapitalize="none"
									textContentType="Password"
									Icons="lock-outline"
								/>

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
