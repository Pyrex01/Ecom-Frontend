import React from "react";
import { StyleSheet, Image, StatusBar, View, FlatList, SafeAreaView, TouchableOpacity, Text, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/AntDesign";


import Avataar from "../../../assets/Avatar.png"
import Colors from './../../../Configs/Colors/Colors';
import STYLES from './../../../Configs/Style/formStyles';
import ProfileStyle from '../../../Configs/Style/ProfileStyle';


const ProfilePage = (props) => {
    return (
        <SafeAreaView>
            <TouchableHighlight>
                <View style={ProfileStyle.container}>
                    <TouchableOpacity>
                        <View style={STYLES.inputContainer}>
                            <Image source={Avataar} style={{ height: 80, width: 100 }} />
                            <Text style={{ fontsize: 40, fontWeight: "bold", paddingHorizontal: 20 }}>User's Name</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={STYLES.inputContainer}>
                            <Icon
                                name='place'
                                color={Colors.grey}
                                size={40}
                                style={STYLES.inputIcon, ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Address</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={STYLES.inputContainer}>
                            <Icon
                                name='favorite-border'
                                color={Colors.grey}
                                size={40}
                                style={STYLES.inputIcon, ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Wish list</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={STYLES.inputContainer}>
                            <Icon
                                name='shopping-cart'
                                color={Colors.grey}
                                size={40}
                                style={STYLES.inputIcon, ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={STYLES.inputContainer}>
                            <Icons
                                name='customerservice'
                                color={Colors.grey}
                                size={40}
                                style={STYLES.inputIcon, ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Complain</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />
                </View>
            </TouchableHighlight>
        </SafeAreaView >
    );
};




export default ProfilePage;
