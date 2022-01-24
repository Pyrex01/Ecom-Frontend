import React from "react";
import {
	StyleSheet,
	View,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
	Text,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Constants from "expo-constants";

const ProfilePage = ({ navigation }) => {
	const [data, setData] = React.useState([
		{
			id: "1",
			title: "Profile",
			subtitle: "View your profile",
			icon: "account-circle",
			color: "blue",
		},
		{
			id: "2",
			title: "Settings",
			subtitle: "Change your settings",
			icon: "settings",
			color: "green",
		},
		{
			id: "3",
			title: "Logout",
			subtitle: "Logout of the app",
			icon: "exit-to-app",
			color: "red",
		},
	]);
	const renderItem = ({ item }) => {
		return (
			<Swipeable
				renderRightActions={() => (
					<TouchableOpacity
						style={[
							styles.rightAction,
							{ backgroundColor: item.color },
						]}
						onPress={() => {
							navigation.navigate(item.title);
						}}
					>
						<Text style={styles.actionText}>{item.title}</Text>
					</TouchableOpacity>
				)}
			>
				<View style={styles.rowFront}>
					<View style={styles.iconContainer}>
						<Text style={styles.icon}>{item.icon}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.subtitle}>{item.subtitle}</Text>
					</View>
				</View>
			</Swipeable>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
			<ProfilePage />
		</SafeAreaView>
	);
};
