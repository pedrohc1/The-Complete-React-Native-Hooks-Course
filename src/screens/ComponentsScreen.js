import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
	const name = <Text>Pedro</Text>;
	return (
		<View>
			<Text style={styles.textStyle}>Getting started with react native!</Text>
			<Text style={styles.subtitleStyle}>My name is {name} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
		color: "black",
	},
	subtitleStyle: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
