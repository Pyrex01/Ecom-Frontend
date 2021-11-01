import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { mainBackend } from "../../Configs/MainBackend";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";

function ModalTester(porps) {
    

    let [otp, setOtp] = useState("");

	let [otpwarning, Setotpwarning] = useState("");	   
    return (
    <View style={styles.container}>
            <Modal isVisible={isModalVisible} style={styles.container } backdropColor ="white" backdropOpacity = "0.80" deviceHeight="100" >
                <View style={{ flex: 2, padding:400, paddingHorizontal: 500,  }}>
                    <TextInput onChangeText={text => setOtp(text)} placeholder='Enter the OTP' />
			        <Text style={{ color: Colors.danger   }}>{otpwarning}</Text>                    
                    
            <TouchableOpacity>
				<View style={STYLES.btnPrimary}>
					<Text style={{	color: "#fff",	fontWeight: "bold",	fontSize: 20,}} onPress={() => otpSubmit(otp, Setotpwarning)}>
						Sign Up
					</Text>
				</View>
			</TouchableOpacity>
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



{/* <Button title="Hide modal" onPress={() => otpSubmit(otp, Setotpwarning)} /> */}