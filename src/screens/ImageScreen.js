import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title="Forest"
				score="9"
				imgSource={require("../../assets/forest.jpg")}
			/>
			<ImageDetail
				title="Beach"
				score="7"
				imgSource={require("../../assets/beach.jpg")}
			/>
			<ImageDetail
				title="Mountain"
				score="4"
				imgSource={require("../../assets/mountain.jpg")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
