import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  container: {
    width: width,
    height: height,
    backgroundColor: '#000b38',
  },
  profile_view: {
    height: 260,
    backgroundColor: '000b38',
    alignItems: 'center'
  },
  scroll_view: {
    width: width,
    height: height - 385,
  },
  avatar_image_view: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
    marginBottom: 20,
  },
  name_text: {
    fontSize: 20,
    color: 'white'
  },
  detail_text: {
    fontSize: 14,
    color: '#3e4567',
    marginTop: 5,
    width: width * 0.7,
    textAlign: 'center',
  },
  cell_view: {
    widht: 380,
    height: 280,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  small_cell_view: {
    width: 190,
    height: 270,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#1c254c'
  },
  small_cell_image_view: {
    width: 190,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#1c254c'
  },
  title_style: {
    marginTop: 5,
    marginLeft: 10,
    color: 'white',
    fontSize: 20
  },
  content_view: {
    padding: 10,
    flexDirection: 'row'
  },
  face_icon_style: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  view_icon_style: {
    width: 20,
    height: 12,
    marginRight: 5,
    marginTop: 2,
  },
  content_text_style: {
    marginRight: 5,
    color: '#565f8a',
    marginTop: -2,
    fontSize: 13
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