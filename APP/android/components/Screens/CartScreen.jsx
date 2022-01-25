import React from "react";	
import { SafeAreaView, StyleSheet, View, Text, Image ,FlatList,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../Configs/Colors/Colors";
import Products from "../Sub Components/Products";
import { PrimaryButton } from "../Sub Components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mainBackend} from "../../../Configs/MainBackend"
import {navigationRef} from "../Forms/Modal"
function print(text) {
	return "data:image/png;base64," + text
}

const CartScreen = () => {
	
	let [cartItems,setCartItems] = React.useState();
	let [shit,setShit] = React.useState(false)


	React.useEffect(()=>{
		AsyncStorage.getItem("login_token",(err,res)=>{
			if(res){
			mainBackend.get("/store/getItemsInCart/",{headers:{Authorization:"Token "+res}}).then(response=>{
				setCartItems(response.data)
				setShit(true)
			})
		}})
	},[shit])

	const CartCard = ({ item}) => {

		let [changed,setChanged]=React.useState(false)
		let [Quantity,setQuantity]=React.useState(item.Quantity)
		let oldQunatity = item.Quantity;



		function doneChange(){
			setChanged(false)
			AsyncStorage.getItem("login_token",(err,res)=>{
				mainBackend.post("store/updataQuantitiy/",{cartID:(item.id).toString(),quantity:Quantity},{headers:{Authorization:"Token "+res}})
				.then(Response=>{
					if(Response.status==202){
						setShit(false)
						return;
					}
					if(err){
						setQuantity(oldQunatity)
					}
					else{
						setQuantity(oldQunatity)
					}
				})
				.catch(err=>
					setQuantity(oldQunatity)
					)

			})
		}

		function subtract(){
			let newQuantitiy = Quantity - 1;
			setQuantity(newQuantitiy)
			if(newQuantitiy<0){
				setQuantity(0)
			}
			setChanged(true)
		}
		function add(){
			let newQuantitiy = Quantity + 1;
			setQuantity(newQuantitiy)
			if(newQuantitiy<0){
				setQuantity(0)
			}
			setChanged(true)
		}

		return (
			<View style={style.cartCard}>

				<Image source={{uri:print(item.Items_ID.Display_Image)}} style={{ height: 80, width: 80 }} />
				<View
					style={{
						height: 100,
						marginLeft: 10,
						paddingVertical: 20,
						flex: 1,
					}}
				>
					<Text style={{ fontWeight: "bold", fontSize: 16 }}>
						{item.Items_ID.Name}
					</Text>
					{/* <Text style={{ fontSize: 13, color: Colors.grey }}>
						{item.Items_ID.discription}
					</Text> */}
					<Text style={{ fontSize: 17, fontWeight: "bold" }}>
						{item.Items_ID.Price}
					</Text>
				</View>
				<View style={{ marginRight: 20, alignItems: "center" }}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>{Quantity}</Text>
					<View style={style.actionBtn}>
						<TouchableOpacity onPress={_=>subtract()} >
						<Icon  name="remove" size={25} color={Colors.white} />
						</TouchableOpacity>
						<TouchableOpacity>
						<Icon name="add" onPress={_=>add()}  size={25} color={Colors.white} />
						</TouchableOpacity>

						{changed==true?	<TouchableOpacity onPress={ _=>doneChange()} >
						<Icon name="done" size={25} color={Colors.white} />
						</TouchableOpacity>:<></>}
					

					</View>
				</View>
			</View>
		);
	};
	return (
		<SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
								<View style={style.header}>
						<Icon	name="arrow-back-ios"	size={28} onPress={navigationRef.goBack}/>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							Cart
						</Text>
					</View>{ cartItems!==null?
			<FlatList	showsVerticalScrollIndicator={true}	contentContainerStyle={{ paddingBottom: 80 }} data={cartItems}	
			renderItem={({ item,id }) => <CartCard item={item} id={id} />}	
			keyExtractor={(item,index)=>item.Items_ID.id.toString()} ListFooterComponentStyle={{	paddingHorizontal: 20,	marginTop: 20,	}}
				ListFooterComponent={() => (
					<View>
						<View	style={{	flexDirection: "row",	justifyContent: "space-between",	marginVertical: 15,	}}	>
							<Text style={{ fontSize: 18, fontWeight: "bold" }}>
								Total Price
							</Text>
							<Text style={{ fontSize: 18, fontWeight: "bold" }}>
								{cartItems==null? 0 :cartItems.reduce((sumofcart,items)=>{
									return sumofcart + (items.Items_ID.Price * items.Quantity)
								},0)}
							</Text>
						</View>
						<View style={{ marginHorizontal: 30 }}>
							<PrimaryButton title="CHECKOUT" />
						</View>
					</View>
				)}
			/>:<Text>Login please!</Text>}
		</SafeAreaView>
	);
};
const style = StyleSheet.create({
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 20,
	},
	cartCard: {
		height: 100,
		elevation: 15,
		borderRadius: 10,
		backgroundColor: Colors.white,
		marginVertical: 10,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	actionBtn: {
		width: 80,
		height: 30,
		backgroundColor: Colors.primary,
		borderRadius: 30,
		paddingHorizontal: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
	},
});

export default CartScreen;
