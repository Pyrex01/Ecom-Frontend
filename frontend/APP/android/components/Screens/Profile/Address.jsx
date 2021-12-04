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
    let [genderlog, setGenderLog] = useState("");

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
        setGenderLog
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
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Last Name</Text>
                            <TextInput
                                name='last_name'
                                onChangeText={text => setLastName(text)}
                                style={AddressStyle.Text} />
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
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Email</Text>
                            <TextInput
                                name='email'
                                onChangeText={text => setEmail(text)}
                                style={AddressStyle.Text} />
                        </View>
                    </View>
                    {/* //! --------------------------home/area------------------------------------ */}
                    <View style={AddressStyle.SingleAddress}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Flat, House no., Building, Company, Apartment</Text>
                            <TextInput
                                name='address'
                                onChangeText={text => setHome(text)}
                                style={AddressStyle.Text} />
                        </View>
                    </View>
                    <View style={AddressStyle.SingleAddress}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Area, Colony, Street, Sector, Village</Text>
                            <TextInput
                                name='address'
                                onChangeText={text => setArea(text)}
                                style={AddressStyle.Text} />
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
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Town/City</Text>
                            <TextInput
                                name='email'
                                onChangeText={text => setCity(text)}
                                style={AddressStyle.Text} />
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
                        </View>
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
    // !first name
    if (values.first_name == "") {
        result.is_error = true;
        result.first_namelog = "First Name Required";
    }
    // !last name
    if (values.last_name == "") {
        result.is_error = true;
        result.last_namelog = "Last Name Required";
    }
    // !gender
    if (values.gender == "") {
        result.is_error = true;
        result.genderlog = "Please select the gender";
    }
    // !Phone
    if (values.phone == "") {
        result.is_error = true;
        result.phonelog = "Phone number is required";
    } else if (!phone_pattern.test(values.phone)) {
        result.is_error = true;
        result.phonelog = " Phone Number is not valid";
    }
    // !email
    if (!email_pattern.test(values.email)) {
        result.is_error = true;
        result.emaillog = "Email id is invalid";
    }

    return result;
}