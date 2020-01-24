import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  container: {
    width: width,
    height: height,
    backgroundColor: '#000b38',
  },
  title_view: {
    width: width,
    height: 30,
    marginTop: 20,
    alignItems: 'center'
  },
  title_text: {
    color: 'white',
    fontSize: 20,
  },
  see_text: {
    color: '#4a5374',
    fontSize: 14,
  },
  text_input_view: {
    alignItems: 'center',
  },
  text_input: {
    opacity: 0.7,
    marginTop: 20,
    marginLeft: 0,
    width: width * 0.9,
    height: 50,
    borderRadius: 25,
    color: '#fff',
    backgroundColor: '#0c1840',
  },
  text_input_style: {
    paddingLeft: 30,
    paddingRight: 30,
    color: '#ffffff',
    borderColor: '#545d7e',
    borderWidth: 2,
    borderRadius: 25.
  },
  tag_view: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  tag_style: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  card_view: {
    width: 125,
    height: 200,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#242e52',
    alignItems: 'center',
  },
  avatar_image_view: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  name_text: {
    fontSize: 16,
    color: 'white',
  },
  follow_button: {
    width: 100,
    height: 26,
    borderRadius: 13,
    marginTop: 10,
    backgroundColor: '#46ead2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  follow_button_text: {
    fontSize: 14,
    color: 'white',
  },
  post_text: {
    marginTop: 10,
    fontSize: 14,
    color: '#555d79',
  },
  round_view: {
    position: 'absolute',
    top: height - 150,
    left: width - 80,
  },
  round_button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe4870',
  },
  add_text_style: {
    fontSize: 40,
    color: 'white',
  }
}