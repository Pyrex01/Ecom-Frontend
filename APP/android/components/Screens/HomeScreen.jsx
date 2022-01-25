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
	FlatList,
	ScrollView,
	TextInput,
	TouchableHighlight,
	TouchableOpacity
} from "react-native";
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
	let [shit,setShit]=React.useState(true);


	useEffect (() => {
		
		mainBackend.get("/store/getItems/").then((response) => {
			setloadning(false)
			setPagingData(response.data)
			setShit(false)
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
				<TouchableOpacity  activeOpacity={0.8} onPress={() => {	setSelectedCategoryIndex(null) ;setShit(true)	}}>
						<View style={{marginHorizontal:10}}>
							<View style={style.categoryBtnImgCon}>
								<Image source={{uri:"data:image/png;base64,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"}} style={{ height: 35, width: 35, resizeMode: "cover", }} />
							</View>
						</View>
					</TouchableOpacity>
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