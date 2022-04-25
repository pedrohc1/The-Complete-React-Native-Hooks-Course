import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const ImageDetail = (props) => {
	return (
		<View>
			<Image source={props.ImgSource} />
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
