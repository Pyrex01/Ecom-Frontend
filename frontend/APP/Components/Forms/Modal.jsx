import React, { useState } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import Modal from "react-native-modal";

import Colors from "../../Configs/Colors/Colors";

function ModalTester() {
    
const [isModalVisible, setModalVisible] = useState(true);

    let [otp, setOtp] = useState("");
	let [otpwarning, Setotpwarning] = useState("");

	let user_Data = { otp };
	let log_Setters = { Setotpwarning };

    const toggleModal = () => {
    setModalVisible(!isModalVisible);
    };

    return (
    <View style={styles.container}>
            <Modal isVisible={isModalVisible} style={styles.container } backdropColor ="white" backdropOpacity = "0.80" deviceHeight="1" >
                <View style={{ flex: 1 }}>
                    <TextInput onChangeText={text => setOtp(text)} placeholder='Enter the OTP' />
				    <Text style={{ color: Colors.danger   }}>{otpwarning}</Text>
                    <Button title="Hide modal" onPress={() => otpSubmit(otp, Setotpwarning)} />
                </View>
            </Modal>
        </View>
    );
}

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

const styles = StyleSheet.create({
    container: {
    marginTop: 150,
    },
    bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    },
    red: {
    color: 'red',
    },
    
});
export default ModalTester;