import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { mainBackend } from "../../Configs/MainBackend";
import Colors from "../../Configs/Colors/Colors";

function ModalTester(porps) {
    

    let [otp, setOtp] = useState("");
	let [otpwarning, Setotpwarning] = useState("");

    const toggleModal = () => {
    setModalVisible(!isModalVisible);
    };

    return (
    <View style={styles.container}>
            <Modal isVisible={porps.isVisible} style={styles.container } backdropColor ="black" backdropOpacity = "0.90" deviceHeight="1" >
                <View style={{ flex: 1 }}>
                    <TextInput onChangeText={text => setOtp(text)} placeholder='Enter the OTP' />
				    <Text style={{ color: Colors.danger   }}>{otpwarning}</Text>
                    <Button title="Submit" onPress={() => otpSubmit(otp, Setotpwarning)} />
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
						AsyncStorage.clear()
						break;
					case 410:
						alert("otp time expired try again");
						break;
					case 400:
						alert("oops something went wrong!");
						break;
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