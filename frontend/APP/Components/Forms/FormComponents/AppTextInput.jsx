import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../Configs/Colors/Colors";
import STYLES from "../../../Configs/Style/formStyles";

export default function AppTextInput({ Icons, ...otherProps }) {
	return (
		<View style={STYLES.inputContainer}>
			{Icon && (
				<Icon
					color={Colors.grey}
					size={20}
					style={STYLES.inputIcon}
					name={Icons}
				/>
			)}

			<TextInput style={STYLES.input} {...otherProps} />
		</View>
	);
}
