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
    let [state, setState] = useState("");
    let [zip, setZip] = useState("");

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
                    {/* //! --------------------------landmark/town---------------------------- */}
                    <View style={AddressStyle.address}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Landmark</Text>
                            <TextInput
                                name='phone'
                                onChangeText={text => setPhone(text)}
                                style={AddressStyle.Text}
                            />
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>Town/City</Text>
                            <TextInput
                                name='email'
                                onChangeText={text => setEmail(text)}
                                style={AddressStyle.Text} />
                        </View>
                    </View>
                    {/* //! --------------------------state/pincode---------------------------- */}
                    <View style={AddressStyle.address}>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>PIN code</Text>
                            <TextInput
                                name='email'
                                onChangeText={text => setEmail(text)}
                                style={AddressStyle.Text} />
                        </View>
                        <View style={AddressStyle.addresscol}>
                            <Text style={AddressStyle.addresslabel}>State / Province / Region</Text>
                            <Picker
                                selectedValue={state}
                                style={AddressStyle.state}
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
                                selectedValue={state}
                                style={AddressStyle.state}
                                onValueChange={(itemValue, itemIndex) =>
                                    setState(itemValue)
                                }
                            >
                                <Picker.Item label='Select an address type' value='' />
                                <Picker.Item label='Home ( 7am - 9pm delivery )' value='Home' />
                                <Picker.Item label='Office/commercial ( 10am - 6pm delivery )' value='Office' />
                            </Picker>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
