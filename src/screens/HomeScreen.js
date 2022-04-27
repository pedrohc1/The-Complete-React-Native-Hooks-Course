import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Hi there!</Text>
			<Button
				color="red"
				title="Go to Components Demo"
				onPress={() => navigation.navigate("Components")}
			/>
			<Button
				style={styles.button}
				title="Go to List Demo"
				onPress={() => navigation.navigate("List")}
			/>
			<Button
				style={styles.button}
				color="green"
				title="Go to Image Demo"
				onPress={() => navigation.navigate("Image")}
			/>
			<Button
				color="purple"
				title="Go to Counter Demo"
				onPress={() => navigation.navigate("Counter")}
			/>
			<Button
				color="orange"
				title="Go to Color Demo"
				onPress={() => navigation.navigate("Color")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		alignSelf: "center",
		paddingBottom: 300,
	},
});

export default HomeScreen;
