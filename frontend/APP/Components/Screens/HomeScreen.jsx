import React from "react";
import {
	Dimensions,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
} from "react-native";
import {
	FlatList,
	ScrollView,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../Configs/Colors/Colors";
import categories from "../Sub Components/categories";
import Products from "../Sub Components/Products";
import { SecondaryButton } from "../Sub Components/Button";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
	const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

	const ListCategories = () => {
		return (
			<SafeAreaView>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={true}
					contentContainerStyle={style.categoriesListContainer}
				>
					{categories.map((category, index) => (
						<TouchableOpacity
							key={index}
							activeOpacity={0.8}
							onPress={() => setSelectedCategoryIndex(index)}
						>
							<View
								style={{
									backgroundColor:
										selectedCategoryIndex == index
											? Colors.primary
											: Colors.secondary,
									...style.categoryBtn,
								}}
							>
								<View style={style.categoryBtnImgCon}>
									<Image
										source={category.image}
										style={{
											height: 35,
											width: 35,
											resizeMode: "cover",
										}}
									/>
								</View>
								<Text
									style={{
										fontSize: 15,
										fontWeight: "bold",
										marginLeft: 10,
										color:
											selectedCategoryIndex == index
												? Colors.white
												: Colors.primary,
									}}
								>
									{category.name}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</SafeAreaView>
		);
	};
	const Card = ({ Products }) => {
		return (
			<TouchableHighlight
				underlayColor={Colors.white}
				activeOpacity={0.9}
				onPress={() => navigation.navigate("DetailsScreen", Products)}
			>
				<View style={style.card}>
					<View
						style={{
							alignItems: "center",
							top: -40,
						}}
					>
						<Image
							source={Products.image}
							style={{ height: 125, width: 130 }}
						/>
					</View>
					<View style={{ marginHorizontal: 20 }}>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							{Products.name}
						</Text>
						<Text
							style={{
								fontSize: 14,
								color: Colors.grey,
								marginTop: 2,
							}}
						>
							{Products.discription}
						</Text>
					</View>
					<View
						style={{
							marginTop: 8,
							marginHorizontal: 30,
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							{Products.price}
						</Text>
						<View style={style.addToCartBtn}>
							<Icon name="add" size={20} color={Colors.white} />
						</View>
					</View>
				</View>
			</TouchableHighlight>
		);
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
			<View style={style.header}>
				<View>
					<View style={{ flexDirection: "row" }}>
						<Text style={{ fontSize: 25 }}>Hello,</Text>
						<Text
							style={{
								fontSize: 25,
								fontWeight: "bold",
								marginLeft: 10,
							}}
						>
							Tazeen
						</Text>
					</View>
					<Text
						style={{
							marginTop: 5,
							fontSize: 20,
							color: Colors.grey,
						}}
					>
						What are you Searching for?
					</Text>
				</View>
				<Image
					source={require("../../assets/Avatar.png")}
					style={{ height: 50, width: 50, borderRadius: 25 }}
				/>
			</View>
			<View
				style={{
					marginTop: 13,
					flexDirection: "row",
					paddingHorizontal: 20,
				}}
			>
				<View style={style.inputContainer}>
					<Icon name="search" size={28} />
					<TextInput
						style={{ flex: 1, fontSize: 18 }}
						placeholder="Search for Varieties"
					/>
				</View>
				<View style={style.sortBtn}>
					<Icon name="tune" size={28} color={Colors.white} />
				</View>
			</View>
			<View>
				<ListCategories />
			</View>
			<FlatList
				showsVerticalScrollIndicator={true}
				numColumns={2}
				data={Products}
				renderItem={({ item }) => <Card Products={item} />}
			/>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
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
