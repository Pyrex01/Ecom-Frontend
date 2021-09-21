import React from "react";
import { Text } from "react-native";
import Colors from "../../../Configs/Colors/Colors";

export default function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null;
	return <Text style={{ color: Colors.danger }}>{error}</Text>;
}
