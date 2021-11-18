import React from "react";
import { Image, View, SafeAreaView, TouchableOpacity, Text, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/AntDesign";
import Iconss from "react-native-vector-icons/Ionicons";


import Avataar from "../../../assets/Avatar.png"
import Colors from './../../../Configs/Colors/Colors';
import STYLES from './../../../Configs/Style/formStyles';
import ProfileStyle from '../../../Configs/Style/ProfileStyle';


const ProfilePage = (props) => {
    return (
        <SafeAreaView>
            <TouchableHighlight>
                <View style={ProfileStyle.container}>
                    <View style={ProfileStyle.View}>
                        <Image source={Avataar} style={ProfileStyle.ProfileImage} />
                        <TouchableOpacity>
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace, ProfileStyle.ProfileName]}>User's Name</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={ProfileStyle.View}>
                            <Iconss
                                name='location-outline'
                                color={Colors.grey}
                                size={40}
                                style={ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Address</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={ProfileStyle.View}>
                            <Icon
                                name='favorite-border'
                                color={Colors.grey}
                                size={40}
                                style={ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Wish list</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={ProfileStyle.View}>
                            <Icon
                                name='shopping-cart'
                                color={Colors.grey}
                                size={40}
                                style={ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />

                    <TouchableOpacity>
                        <View style={ProfileStyle.View}>
                            <Icons
                                name='customerservice'
                                color={Colors.grey}
                                size={40}
                                style={ProfileStyle.IconSpace}
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
