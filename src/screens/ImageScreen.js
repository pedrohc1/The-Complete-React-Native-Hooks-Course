import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title="Forest"
				ImgSource={require("../../assets/forest.jpg")}
			/>
			<ImageDetail
				title="Beach"
				ImgSource={require("../../assets/beach.jpg")}
			/>
			<ImageDetail
				title="Mountain"
				ImgSource={require("../../assets/mountain.jpg")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
