import React, { useState } from "react";
import {
	Button,
	Modal,
	FormControl,
	Input,
	Center,
	NativeBaseProvider,
} from "native-base";
import { Text, TextInput } from "react-native";

import config from "../../../config.json";
import Colors from "../../Configs/Colors/Colors";

export const OtpModal = () => {
	const [showModal, setShowModal] = useState(false);
	let [otp, setOtp] = useState("");
	let [otperr, setOtpErr] = useState("");

	let user_Data = { otp };
	let log_Setters = { setOtpErr };

	return (
		<>
			<Button onPress={() => setShowModal(true)}>Button</Button>
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<Modal.Content maxWidth='400px'>
					<Modal.CloseButton />
					<Modal.Body>
						<FormControl>
							<FormControl.Label>Otp</FormControl.Label>
							<TextInput
								onChangeText={text => setOtp(text)}
								placeholder='Enter the OTP'
							/>
							<Text style={{ color: Colors.danger }}>
								{otperr}
							</Text>
						</FormControl>
					</Modal.Body>
					<Modal.Footer>
						<Button.Group space={2}>
							<Button variant='ghost' colorScheme='blueGray'>
								cancel
							</Button>
							<Button
								onPress={() => submit(user_Data, log_Setters)}
							>
								Save
							</Button>
						</Button.Group>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</>
	);
};

function validation(otp) {
	let result = {};
	result.is_error = false;
	if (otp == "") {
		result.is_error = true;
		result.otperr = "Enter OTP";
	} else if (!otp.length == 6 && otp == 1 - 9) {
		result.is_error = true;
		result.otperr = "Enter a valid OTP";
	}
	return result;
}

function submit(user_Data, log_Setters) {
	let result = validation(user_Data);
	console.log(result);
	if (result.is_error) {
		log_Setters.setOtpErr(result.otperr);
	} else {
		log_Setters.setOtpErr("");
		setShowModal(false);

		axios.post(String(config.baseURL) + "/user/confirm/", {
				otp: user_Data.otp,
				token: token,
			})
			.then(function (response) {
				console.log(response.status == 201);
				if (response.status == 201) {
					Alert.alert("signup success");
					console.log(response.data);
				}
				if (response.status == 226) {
					Alert.alert("email already in use");
					console.log(response.status, "email already in use");
				}

				if (response.status >= 400 && response.status < 500) {
					Alert.alert("bad request");
				}
			});
	}
}
/* () => {
setShowModal(false)
} */

export default () => {
	return (
		<NativeBaseProvider>
			<Center flex={1} px='3'>
				<OtpModal />
			</Center>
		</NativeBaseProvider>
	);
};
