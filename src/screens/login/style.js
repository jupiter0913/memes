import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
	container: {
		width: width,
		height: height,
		backgroundColor: 'rgba(0, 12, 55, 255)',
		alignItems: 'center',
	},
	backgroundImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: width,
		height: height,
	},
	textArea: {
		marginTop: 50,
		height: 80,
	},
	memes_: {
		top: 15,
		left: 0,
		height: 77,
		fontFamily: 'Poppins',
		fontSize: 48,
		color: '#44e9d5',
	},
	dopa: {
		position: 'absolute',
		top: 0,
		left: 2,
		width: 67,
		height: 37,
		fontFamily: 'Poppins',
		fontSize: 23,
		color: '#ffffff',
	},
	retangleArea: {
		position: 'absolute',
		opacity: 0.1,
		marginTop: 160,
		left: 0,
		width: width,
		height: height - 160,
		borderRadius: 30,
		backgroundColor: 'rgba(200, 200, 200, 255)',
	},
	sign_in_view:
	{
		marginTop: 70,
		width: width,
		alignItems: 'center',
	},
	sign_in: {
		fontFamily: 'Poppins',
		fontSize: 30,
		color: '#ffffff',
	},
	text_input_view: {
		alignItems: 'center',
	},
	text_input: {
		opacity: 0.7,
		marginTop: 20,
		marginLeft: 0,
		width: width * 0.8,
		height: 50,
		borderRadius: 25,
		color: '#fff',
		backgroundColor: 'rgba(0, 12, 55, 255)',
	},
	forgot_password_view: {
		alignItems: 'flex-end',
		width: width * 0.8,
		marginTop: 20,
	},
	forgot_password: {
		fontFamily: 'Poppins',
		fontSize: 16,
		color: '#44e9d5',
	},
	sign_in_button_view: {

	},
	sign_in_button: {
		marginTop: 30,
		alignItems: 'center',
		justifyContent: 'center',
		width: width * 0.8,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#44e9d5',
	},
	sign_in_button_text: {
		fontFamily: 'Poppins',
		fontSize: 24,
		color: '#ffffff',
	},
	or_text_view: {
		marginTop: 40,
	},
	or_text: {
		fontSize: 16,
		fontFamily: 'Poppins',
		color: '#fff',
	},
	social_button_view: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 40,
		width: width * 0.7,
	},
	social_button: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
		borderRadius: 30,
		borderColor: 'white',
		borderWidth: 2,
	},
	social_button_text: {
		fontSize:24,
		fontWeight: '700',
		color: 'white',
	},
	sign_up_view: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 40,
		width: width * 0.8,
	}

}