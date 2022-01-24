import React from 'react';
import "react-native-gesture-handler";
import { } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import {View ,SafeAreaView,Text,ScrollView,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import Colors from '../../../Configs/Colors/Colors';
import {navigationRef} from "./Modal"

function ComplainScreen(){

	return (
		<SafeAreaView style={{ paddingHorizontal: 40, flex: 1, backgroundColor: Colors.white, }}>
			<ScrollView   showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
				<View style={{ backgroundColor: Colors.white, flex: 1 }}>
					<View style={style.header}>
						<Icon name='arrow-back-ios'	size={28}	onPress={navigationRef.goBack}	>
						<Text style={{ fontSize: 20,color:Colors.black ,fontWeight:"bold"}}>
							COMPLAIN HERE
						</Text>
                        </Icon>
                    </View>
                </View>
					<View style={{borderRadius:15,borderWidth:2,}}>
						<TextInput style={{padding:20,margin:20,marginBottom:0,fontSize:20}} placeholder='Title Of Complaint' />
						<TextInput style={{padding:20,margin:20,marginBottom:200,marginTop:10,fontSize:20}} placeholder='Explain your problem briefly here ...' multiline numberOfLines={5} />
					</View>
					<TouchableOpacity>
						<Text style={{backgroundColor:"rgb(0, 95, 102)",color:"#ffffff",textAlign:"center",fontSize:30,marginTop:10,marginBottom:10,borderRadius:18}}>OK</Text>
					</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}
const style = StyleSheet.create({
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 1,
		marginTop: 10,
	},
});
export default ComplainScreen;