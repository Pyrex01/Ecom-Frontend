import React from "react";
import { Image, View, SafeAreaView, TouchableOpacity, Text, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/AntDesign";
import Iconss from "react-native-vector-icons/Ionicons";


import Avataar from "../../../../assets/Avatar.png"
import Colors from '../../../../Configs/Colors/Colors';
import ProfileStyle from '../../../../Configs/Style/ProfileStyle';
// import STYLES from '../../../../Configs/Style/formStyles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {navigationRef} from "../../Forms/Modal"
import axios from "axios";
import { mainBackend } from "../../../../Configs/MainBackend";
// Array [
//     "First_name",
//     "Photo",
//     "Second_Name",
//     "isLogedin",
//     "login_token",
//     "signup_token",
//   ]
const ProfilePage = (props) => {
    let [name,setName]=React.useState("")
    let [photo,setPhoto]=React.useState("")
    AsyncStorage.multiGet(["First_name","Photo",],(err,res)=>{
        setName(res[0][1])
        setPhoto(res[1][1])
    })
    return ( <SafeAreaView>
            <TouchableHighlight>
                <View style={ProfileStyle.container}>
                    <View style={ProfileStyle.View}>
                        <Image source={photo==""?Avataar:{uri:photo}} style={ProfileStyle.ProfileImage} />
                        <TouchableOpacity>
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace, ProfileStyle.ProfileName]}>{name}</Text>
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
                    <TouchableOpacity onPress={logout}>
                        <View style={ProfileStyle.View}>
                            <Icons
                                name='customerservice'
                                color={Colors.grey}
                                size={40}
                                style={ProfileStyle.IconSpace}
                            />
                            <Text style={[ProfileStyle.Font, ProfileStyle.FontSpace]} >Log Out</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ProfileStyle.Line} />
                </View>
            </TouchableHighlight>
        </SafeAreaView >
    );
};

function logout(){

    AsyncStorage.getItem("login_token",(err,res)=>{
        if(err){
            console.log("err");
            return;
        }
        var x = "Token "+res
        axios.post("http://shopingbazar.sytes.net/user/logout/",{},{headers:{Authorization:x}}).then((response)=>{

            switch(response.status){
                case 400:
                    alert("oops something went wrong")
                    navigationRef.navigate("BoardScreen")
                    break;
                case 200:
                    AsyncStorage.multiRemove(['First_name','Photo','Second_Name','isLogedin','login_token','signup_token'], (err) => {
                        AsyncStorage.setItem("isLogedin","false")
                    });
                    navigationRef.navigate("BoardScreen")
                    break;
            }
        })
        .catch((response)=>{
            console.log(response)
            alert("ooops something went wrong")
        })
    })
}


export default ProfilePage;
