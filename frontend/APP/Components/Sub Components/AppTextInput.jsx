import React from "react";
import { TextInput, View } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../Configs/Colors/Colors";
import STYLES from "../../Configs/Style/formStyles";

export default function AppTextInput(Icon, ...othherProps) {
	return (
		<View style={STYLES.inputContainer}>
			{Icons && (
				<Icons
					color={Colors.grey}
					size={20}
					style={STYLES.inputIcon}
					name={Icon}
				/>
			)}

			<TextInput style={STYLES.input} {...othherProps} />
		</View>
	);
}
