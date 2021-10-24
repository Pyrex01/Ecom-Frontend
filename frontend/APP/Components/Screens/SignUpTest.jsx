import React from "react";
/* import * as Yup from "yup";
import { Formik } from "formik"; */
import {
	SafeAreaView,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Text,
} from "react-native";

import STYLES from "../../Configs/Style/formStyles";
import { SignupStyle } from "../../Configs/Style/SignUpStyle";
import { Device } from "../../Configs/Style/PlatformJson";
import { AppTextInput, AppButton } from "../Forms/FormComponents";
import useForm from "../Forms/FormComponents/UseForm";
import validate from "../Forms/FormComponents/Validateinfo";

export default function SignUpTest() {
	// const { handleChange, values, handleSubmit, errors} = useForm(validate);

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
					<AppTextInput
						name="first_name"
						id="first_name"
						placeholder="First Name*"
						autoCompleteType="name"
						onChangeText={handleChange}
						values={values.first_name}
						// onBlur={() => setFieldTouched("first_name")}
						Icons="person-outline"
						keyboardType="name-prefix"
					/>
					<AppTextInput
						name="last_name"
						id="last_name"
						placeholder="Last Name*"
						autoCompleteType="name"
						onChangeText={handleChange}
						values={values.last_name}
						// onBlur={() => setFieldTouched("last_name")}
						Icons="person-outline"
						keyboardType="name-suffix"
					/>
					<AppTextInput
						name="phone"
						id="phone"
						placeholder="phone*"
						autoCompleteType="phone"
						onChangeText={handleChange}
						values={values.phone}
						// onBlur={() => setFieldTouched("phone")}
						Icons="phone"
						keyboardType="number-pad"
					/>
					<AppTextInput
						name="gender"
						id="gender"
						placeholder="Gender*"
						autoCompleteType="gender"
						onChangeText={handleChange}
						values={values.gender}
						// onBlur={() => setFieldTouched("gender")}
						Icons="person"
						keyboardType="gender"
					/>

					<AppTextInput
						name="email"
						id="email"
						placeholder="Email*"
						keyboardType="email-address"
						autoCompleteType="email"
						onChangeText={handleChange}
						values={values.email}
						// onBlur={() => setFieldTouched("email")}
						autoCorrect={false}
						autoCapitalize="none"
						textContentType="emailAddress"
						Icons="mail-outline"
					/>

					<AppTextInput
						name="password"
						id="password"
						placeholder="Password*"
						secureTextEntry
						autoCompleteType="password"
						onChangeText={handleChange}
						values={values.password}
						// onBlur={() => setFieldTouched("password")}
						autoCorrect={false}
						autoCapitalize="none"
						textContentType="Password"
						Icons="lock-outline"
					/>

					<AppTextInput
						name="confirm_password"
						id="confirm_password"
						placeholder="Confirm Password*"
						secureTextEntry
						onChangeText={handleChange}
						value={values.confirm_password}
						// onBlur={() => setFieldTouched("confirm_password")}
						autoCompleteType="password"
						autoCorrect={false}
						autoCapitalize="none"
						textContentType="Password"
						Icons="lock-outline"
					/>

					<AppButton title="Signup" onPress={handleSubmit} />

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

/* const validationSchema = Yup.object().shape({
	first_name: Yup.string().required("Required!").label("First Name"),
	last_name: Yup.string().required("Required!").label("Last Name"),
	email: Yup.string().required("Required!").email().label("Email"),
	password: Yup.string().required("Required!").min(8).label("Password"),
	confirm_password: Yup.string()
		.label("Confirm Password")
		.oneOf([Yup.ref("password")], "Password must be the same!")
		.required("Required!"),
	phone: Yup.number().required("Required!").min(10).label("Phone"),
	gender: Yup.string().required("Required!").label("Gender"),
}); */
