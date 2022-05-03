import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, button, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text style={styles.text}>{color}</Text>
			<Button
				onPress={() => onIncrease()}
				color={button}
				title={`Increase ${color}`}
			/>
			<Button
				onPress={() => onDecrease()}
				color={button}
				title={`Decrease ${color}`}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		alignSelf: "center",
		padding: 3,
		fontWeight: "bold",
		fontSize: 15,
	},
});

export default ColorCounter;
