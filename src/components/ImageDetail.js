import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const ImageDetail = (props) => {
	return (
		<View>
			<Image source={props.imgSource} />
			<Text>{props.title}</Text>
			<Text>Image Score - {props.score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
