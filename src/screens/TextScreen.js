import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View>
			<Text>Enter Name:</Text>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
				value={name}
				onChangeText={(newValue) => setName(newValue)}
			/>
			<Text>My name is {name}</Text>
			<Text>Enter Password:</Text>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			{password.length >= 5 ? null : (
				<Text>password must be longer than 5 characters</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		padding: 1,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default TextScreen;
