import React ,{useEffect} from "react";
import {
	Pressable,
	ActivityIndicator,
	Dimensions,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
	Button,
} from "react-native";
import {
	FlatList,
	ScrollView,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../Configs/Colors/Colors";
import categories from "../Sub Components/categories";
import Products from "../Sub Components/Products";
import { SecondaryButton } from "../Sub Components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mainBackend } from "../../../Configs/MainBackend"
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
import axios from "axios";
import {navigationRef} from "../Forms/Modal"
function print(text) {
	return "data:image/png;base64," + text
}

const Card = ({ Products }) => {
	return (
		<TouchableHighlight onPress={ ()=>
			{
			mainBackend.get("/store/getitem/",{
				params: {
					product_ID:Products.id
				}}).then(function (response){
					navigationRef.navigate("DetailsScreen",{data:response.data})
				}).catch(err=>{
					alert("oops something went wrong")
				})
			}} underlayColor={Colors.white} activeOpacity={0.9}>
			<View style={style.card}>
				<View style={{ alignItems: "center", top: -40, }}>
					<Image source={{ uri: print(Products.Display_Image) }} style={{ height: 125, width: 130 }} />
				</View>
				<View style={{ marginHorizontal: 20 }}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						{Products.Name}
					</Text>
					{/* <Text style={{ fontSize: 14, color: Colors.grey, marginTop: 2, }}	>
						{Products.discription}
					</Text> */}
				</View>
				<View style={{ marginTop: 8, marginHorizontal: 30, flexDirection: "row", justifyContent: "space-between", }}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						{Products.Price}
					</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
};

const HomeScreen = ({ navigation }) => {
	let name;
	AsyncStorage.getItem("login_token", (err, result) => {
		if (err) { return; }
		else {
			AsyncStorage.getItem("First_name", (er, res) => {
				name = res;
			})
		}
	})
	let [loading, setloadning] = React.useState(true);
	let [pagingData, setPagingData] = React.useState(true);
	let [searchString, setsearchString] = React.useState("");
	const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState();
	let shit = true


	useEffect (() => {
		
		mainBackend.get("/store/getItems/").then((response) => {
			setloadning(false)
			setPagingData(response.data)
		})
	},[shit]);

	function gotoNext(){
		setloadning(true)
		axios.get(pagingData.next).then((response)=>{
			setPagingData(response.data)
			setloadning(false)
		})
	}

	function search(){
		setloadning(true)
		mainBackend.get("/store/getSortItems/",{
			params: {
				searchString
			}}).then((response)=>{
			setPagingData(response.data)
			setloadning(false)
			}).catch(err=>console.log(err))
	
	}
	function gotoPrevious(){
		setloadning(true)
		
		axios.get(pagingData.previous).then((response)=>{
			setPagingData(response.data)
			setloadning(false)
		})
	}
	
	// Electronic 1
	// Fashion 2
	// Groceries 3
	// Hygiene 4
	
	function getCategorie(id){
		setloadning(true)
		mainBackend.get("/store/getSortItems/",{
			params: {
				categories:id
			}})
			.then((response)=>{
				data= response.data
				setPagingData(data)
				setloadning(false)
			})
		}
		
	const ListCategories = () => {
		return (
			<SafeAreaView>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.categoriesListContainer}>
					{categories.map((category, index) => (
						<TouchableOpacity key={index} activeOpacity={0.8} onPress={() => {
							setSelectedCategoryIndex(index)
							getCategorie(category.id)
						}}>
						<View style={{ backgroundColor: selectedCategoryIndex == index ? Colors.primary : Colors.secondary, ...style.categoryBtn, }}>
							<View style={style.categoryBtnImgCon}>
								<Image source={category.image} style={{ height: 35, width: 35, resizeMode: "cover", }} />
							</View>
							<Text style={{ fontSize: 10, fontWeight: "bold", marginLeft: 10, color: selectedCategoryIndex == index ? Colors.white : Colors.primary, }}>{category.name}</Text>
						</View>
					</TouchableOpacity>)
					)}
				</ScrollView>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
			<View style={{ marginTop: 13, flexDirection: "row", paddingHorizontal: 20, }}>
				<View style={style.inputContainer}>
					<Icon name="search" size={28} />
					<TextInput style={{ flex: 1, fontSize: 18 }} onChangeText={text=>setsearchString(text)} placeholder="Search..." />
				</View>
				<View style={style.sortBtn}>
					<Pressable onPress={search} >
						<Icon name="send" size={28} color={Colors.white} />
					</Pressable>
				</View>
			</View>
			<View>
				<ListCategories />
			<ActivityIndicator size="large" animating={loading} color={Colors.primary} />
	

			</View>
			<FlatList showsVerticalScrollIndicator={true} numColumns={2} data={pagingData.results} renderItem={({ item }) => <Card navigate={navigation} Products={item} />} />
			<View style={style.paginationContainer}>
				<Pressable style={{ height: 30, width: 90, backgroundColor:pagingData.previous==null?Colors.grey:Colors.primary , borderRadius: 10, textAlign: "center", margin: 5, alignContent: "center", justifyContent: "center" }} disabled={(pagingData.previous==null?true:false)} onPress={gotoPrevious}>
					<Text>  Previous</Text>
				</Pressable>
				<Pressable style={ { height: 30, width: 20, backgroundColor: pagingData.current?Colors.primary:Colors.grey, borderRadius: 10, textAlign: "center", margin: 5, alignContent: "center", justifyContent: "center" }} >
					<Text> {pagingData.current}</Text>
				</Pressable>
				<Pressable style={{ height: 30, width: 70, backgroundColor: pagingData.next==null?Colors.grey:Colors.primary, borderRadius: 10, textAlign: "center", margin: 5, alignContent: "center", justifyContent: "center" }} disabled={(pagingData.next==null?true:false)} onPress={gotoNext} >
					<Text>  Next</Text>
				</Pressable>
			</View>

		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	paginationPreviousButton: { height: 30, width: 90, backgroundColor:Colors.primary , borderRadius: 10, textAlign: "center", margin: 5, alignContent: "center", justifyContent: "center" },
	paginationNextButton: { height: 30, width: 70, backgroundColor: Colors.primary, borderRadius: 10, textAlign: "center", margin: 5, alignContent: "center", justifyContent: "center" },
	paginationButtonCenter: { height: 30, width: 20, backgroundColor: Colors.primary, borderRadius: 10, textAlign: "center", margin: 5, alignContent: "center", justifyContent: "center" },
	paginationContainer: { alignSelf: "center", alignContent: "center", display: "flex", flexDirection: "row" },
	header: {
		marginTop: Platform.OS === "web" ? 5 : 20,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: Platform.OS === "web" ? -2 : 5,
	},
	inputContainer: {
		flex: 1,
		height: 50,
		borderRadius: 10,
		flexDirection: "row",
		backgroundColor: Colors.light,
		alignItems: "center",
		paddingHorizontal: 20,
	},
	sortBtn: {
		width: 50,
		height: 50,
		marginLeft: 10,
		backgroundColor: Colors.primary,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	categoriesListContainer: {
		paddingVertical: Platform.OS === "web" ? 10 : 20,
		alignItems: "center",
		paddingHorizontal: 20,
	},
	categoryBtn: {
		height: 45,
		width: 120,
		marginRight: 7,
		borderRadius: 30,
		alignItems: "center",
		paddingHorizontal: 5,
		flexDirection: "row",
	},
	categoryBtnImgCon: {
		height: 35,
		width: 35,
		backgroundColor: Colors.white,
		borderRadius: 35,
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		height: 220,
		width: Platform.OS === "web" ? 500 : 175,
		marginHorizontal: 10,
		marginBottom: 40,
		marginTop: 50,
		borderRadius: 15,
		elevation: 13,
		backgroundColor: Colors.white,
		flex: 1,
	},
	addToCartBtn: {
		height: 30,
		width: 30,
		borderRadius: 20,
		backgroundColor: Colors.primary,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default HomeScreen;

{/* <View style={style.header}>
	<View>
		<View style={{ flexDirection: "row" }}>
			<Text style={{ fontSize: 25 }}>Hello</Text>
			<Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10, }}>
				{(name !== (null || undefined) ? "," + name : "")}
			</Text>
		</View>
		<Text style={{ marginTop: 5, fontSize: 20, color: Colors.grey, }}>
			What are you Searching for?
		</Text>
	</View>
	<Image source={require("../../../assets/Avatar.png")} style={{ height: 50, width: 50, borderRadius: 25 }} />
</View> */}