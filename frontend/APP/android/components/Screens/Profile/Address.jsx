import React, { useState } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, SafeAreaView, ScrollView ,Pressable,FlatList} from "react-native";

import Colors from '../../../../Configs/Colors/Colors';

function SingleAddress(){
    return (
        <View style={{borderRadius:10,alignItems:"center",borderStyle:"solid",borderColor:"rgb(0,0,0)",borderWidth:1,margin:10,backgroundColor:"#ffffff",}}>
            <Text style={{fontWeight:"bold",fontSize:17,margin:5}} >Name  9768415550 </Text>
            <Text style={{margin:10}}>Landmark Regein Town State Pincode</Text>
        </View>
    )
}

export default function Address() {

    return (
        <SafeAreaView>
            <View>
            <Pressable style={{marginHorizontal:40,height:30,borderRadius:20,backgroundColor:Colors.primary,alignItems:'center',marginTop:20,marginBottom:20}}>
                <Text style={{color:"rgb(0,0,0)",marginTop:4}}>Create new Address</Text>
            </Pressable>
            </View>
            <View>
            <ScrollView>
            <SingleAddress/>
                <FlatList data={[1,2,3,4,5,6,7,8,9]} renderItem={SingleAddress}/>

            </ScrollView>
            </View>
        </SafeAreaView>
    );
}
