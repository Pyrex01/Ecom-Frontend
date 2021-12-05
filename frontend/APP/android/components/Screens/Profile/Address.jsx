import React, { useState } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";

import Colors from '../../../../Configs/Colors/Colors';
import AddressStyle from '../../../../Configs/Style/AddressStyle';
import ProfileStyle from '../../../../Configs/Style/ProfileStyle';

export default function Address({ navigation }) {
    let [first_name, setFirstName] = useState("");
    let [last_name, setLastName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [home, setHome] = useState("");
    let [area, setArea] = useState("");
    let [city, setCity] = useState("");
    let [landmark, setLandmark] = useState("");
    let [state, setState] = useState("");
    let [addressType, setAddressType] = useState("");
    let [zip, setZip] = useState("");

    let [first_namelog, setFirstNameLog] = useState("");
    let [last_namelog, setLastNameLog] = useState("");
    let [phonelog, setPhoneLog] = useState("");
    let [emaillog, setEmailLog] = useState("");
    let [homelog, setHomeLog] = useState("");
    let [arealog, setAreaLog] = useState("");
    let [landmarklog, setLandmarkLog] = useState("");
    let [citylog, setCityLog] = useState("");
    let [ziplog, setZipLog] = useState("");
    let [statelog, setStateLog] = useState("");
    let [addressTypelog, setAddressTypeLog] = useState("");


    let user_Data = {
        first_name,
        last_name,
        phone,
        email,
        home,
        area,
        city,
        landmark,
        state,
        addressType,
        zip

    };

    let log_Setters = {
        setFirstNameLog,
        setLastNameLog,
        setPhoneLog,
        setEmailLog,
        setHomeLog,
        setAreaLog,
        setCityLog,
        setLandmarkLog,
        setStateLog,
        setAddressTypeLog,
        setZipLog

    };

    return (
        <SafeAreaView>
            <View style={AddressStyle.container}>
                <ScrollView>
                    {/* //! --------------------------name---------------------------- */}
                    <View style={AddressStyle.address}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>First Name</Text>
                            <TextInput
                                name='first_name'
                                onChangeText={text => setFirstName(text)}
                                style={AddressStyle.Text}
                            />
                            <Text style={AddressStyle.errors}>{first_namelog}</Text>
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Last Name</Text>
                            <TextInput
                                name='last_name'
                                onChangeText={text => setLastName(text)}
                                style={AddressStyle.Text} />
                            <Text style={AddressStyle.errors}>{last_namelog}</Text>
                        </View>
                    </View>
                    {/* //! --------------------------email/phone---------------------------- */}
                    <View style={AddressStyle.address}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Phone</Text>
                            <TextInput
                                name='phone'
                                onChangeText={text => setPhone(text)}
                                style={AddressStyle.Text}
                            />
                            <Text style={AddressStyle.errors}>{phonelog}</Text>
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Email</Text>
                            <TextInput
                                name='email'
                                onChangeText={text => setEmail(text)}
                                style={AddressStyle.Text} />
                            <Text style={AddressStyle.errors}>{emaillog}</Text>
                        </View>
                    </View>
                    {/* //! --------------------------home/area------------------------------------ */}
                    <View style={AddressStyle.SingleAddress}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Flat, House no., Building, Company, Apartment</Text>
                            <TextInput
                                name='address'
                                onChangeText={text => setHome(text)}
                                style={AddressStyle.Text}
                                multiline={true}
                                returnKeyType="next"
                            />
                            <Text style={AddressStyle.errors}>{homelog}</Text>
                        </View>
                    </View>
                    <View style={AddressStyle.SingleAddress}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Area, Colony, Street, Sector, Village</Text>
                            <TextInput
                                name='address'
                                onChangeText={text => setArea(text)}
                                style={AddressStyle.Text}
                                multiline={true}
                            />
                            <Text style={AddressStyle.errors}>{arealog}</Text>
                        </View>
                    </View>
                    {/* //!--------------------------landmark/town---------------------------- */}
                    <View style={AddressStyle.address}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Landmark</Text>
                            <TextInput
                                name='phone'
                                onChangeText={text => setLandmark(text)}
                                style={AddressStyle.Text}
                            />
                            <Text style={AddressStyle.errors}>{landmarklog}</Text>
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Town/City</Text>
                            <TextInput
                                name='email'
                                onChangeText={text => setCity(text)}
                                style={AddressStyle.Text} />
                            <Text style={AddressStyle.errors}>{citylog}</Text>
                        </View>
                    </View>
                    {/* //!--------------------------state/pincode---------------------------- */}
                    <View style={AddressStyle.address}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>PIN code</Text>
                            <TextInput
                                name='email'
                                onChangeText={text => setZip(text)}
                                style={AddressStyle.Text} />
                            <Text style={AddressStyle.errors}>{ziplog}</Text>
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>State / Province / Region</Text>
                            <Picker
                                selectedValue={state}
                                style={[AddressStyle.state, AddressStyle.Text]}
                                onValueChange={(itemValue, itemIndex) =>
                                    setState(itemValue)
                                }
                            >
                                <Picker.Item label='Select state' value='' />
                                <Picker.Item label='ANDAMAN & NICOBAR ISLANDS' value='ANDAMAN & NICOBAR ISLANDS' />
                                <Picker.Item label='ANDHRA PRADESH' value='ANDHRA PRADESH' />
                                <Picker.Item label='ARUNACHAL PRADESH' value='ARUNACHAL PRADESH' />
                            </Picker>
                            <Text style={AddressStyle.errors}>{statelog}</Text>
                        </View>
                    </View>
                    {/* //! --------------------------address types---------------------------- */}
                    <View style={AddressStyle.address}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Address Type</Text>
                            <Picker
                                selectedValue={addressType}
                                style={[AddressStyle.state, AddressStyle.Text]}
                                onValueChange={(itemValue, itemIndex) =>
                                    setAddressType(itemValue)
                                }
                            >
                                <Picker.Item label='Select an address type' value='' />
                                <Picker.Item label='Home/Residence ( 7am - 9pm delivery )' value='Home' />
                                <Picker.Item label='Office/Commercial ( 10am - 6pm delivery )' value='Office' />
                            </Picker>
                            <Text style={AddressStyle.errors}>{addressTypelog}</Text>
                        </View>
                    </View>
                    <View style={AddressStyle.address}>
                        <TouchableOpacity style={[AddressStyle.button]} onPress={() => submit(user_Data, log_Setters)} >
                            <Text style={AddressStyle.buttonText}
                            >Save Address</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}
function validation(values) {
    let result = {};
    result.is_error = false;
    let phone_pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (values.first_name === "") {
        result.is_error = true;
        result.first_name = "First name is required";
    }
    if (values.last_name === "") {
        result.is_error = true;
        result.last_name = "Last name is required";
    }
    if (values.phone === "") {
        result.is_error = true;
        result.phone = "Phone is required";
    }
    if (values.email === "") {
        result.is_error = true;
        result.email = "Email is required";
    }
    if (values.email !== "" && !email_pattern.test(values.email)) {
        result.is_error = true;
        result.email = "Email is not valid";
    }
    if (values.phone !== "" && !phone_pattern.test(values.phone)) {
        result.is_error = true;
        result.phone = "Phone number is not valid";
    }
    if (values.home === "") {
        result.is_error = true;
        result.home = "Field required";
    }
    if (values.area === "") {

        result.is_error = true;
        result.area = "Field required";
    }
    if (values.city === "") {
        result.is_error = true;
        result.city = "City is required";
    }
    if (values.zip === "") {
        result.is_error = true;
        result.zip = "Pincode is required";
    }
    if (values.state === "") {
        result.is_error = true;
        result.state = "State is required";
    }
    if (values.addressType === "") {
        result.is_error = true;
        result.addressType = "Address type is required";
    }
    if (values.landmark === "") {
        result.is_error = true;
        result.landmark = "Landmark is required";
    }

    return result;
}

function submit(user_Data, log_Setters) {
    let result = validation(user_Data);
    if (result.is_error) {
        log_Setters.setAreaLog(result.area);
        log_Setters.setAddressTypeLog(result.addressType);
        log_Setters.setCityLog(result.city);
        log_Setters.setEmailLog(result.email);
        log_Setters.setFirstNameLog(result.first_name);
        log_Setters.setHomeLog(result.home);
        log_Setters.setLandmarkLog(result.landmark);
        log_Setters.setLastNameLog(result.last_name);
        log_Setters.setPhoneLog(result.phone);
        log_Setters.setStateLog(result.state);
        log_Setters.setZipLog(result.zip);

    } else {
        log_Setters.setAreaLog("");
        log_Setters.setAddressTypeLog("");
        log_Setters.setCityLog("");
        log_Setters.setEmailLog("");
        log_Setters.setFirstNameLog("");
        log_Setters.setHomeLog("");
        log_Setters.setLandmarkLog("");
        log_Setters.setLastNameLog("");
        log_Setters.setPhoneLog("");
        log_Setters.setStateLog("");
        log_Setters.setZipLog("");
        console.log("success");

    }
}
