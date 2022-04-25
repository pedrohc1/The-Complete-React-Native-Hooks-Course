import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
	return (
		<View>
			<Text style={styles.text}>Hi there!</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => console.log("button pressed")}
			/>
			<TouchableOpacity onPress={() => console.log("List pressed")}>
				<Text>Go to List Demo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
	},
});

export default HomeScreen;
