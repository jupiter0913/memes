import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
	container: {
		width: width,
		height: height,
		backgroundColor: "rgba(0, 12, 55, 255)",
	},
	backgroundImage: {
		position: "absolute",
		top: 0,
		left: 0,
		width: width,
		height: height,
	},
	textArea: {
		height: height,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	memes_: {
		top: 15,
		left: 0,
		width: 200,
		height: 77,
		fontFamily: "Poppins",
		fontSize: 48,
		color: "#44e9d5",
	},
	dopa: {
		position: "absolute",
		top: 0,
		left: 2,
		width: 67,
		height: 37,
		fontFamily: "Poppins",
		fontSize: 23,
		color: "#ffffff",
	},

}