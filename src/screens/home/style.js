import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  container: {
    width: width,
    height: height,
    backgroundColor: '#000b38',
  },
  scroll_view: {
    width: width,
    height: height - 180,
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
  total_cell_view: {
    widht: 380,
    height: 620,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  first_cell_view: {
    width: 190,
    height: 620,
    margin: 5,
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
  large_cell_view: {
    width: 190,
    height: 330,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#1c254c'
  },
  large_cell_image_view: {
    width: 190,
    height: 260,
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
  // home detail page style
  text_input_view: {
    alignItems: 'center',
  },
  text_input: {
    opacity: 0.7,
    marginTop: 20,
    width: width -60,
    // height: 50,
    borderRadius: 25,
    color: '#fff',
    backgroundColor: 'rgba(0, 12, 55, 255)',
  },
  text_input_style: {
    paddingLeft: 30,
    paddingRight: 30,
    color: '#ffffff'
  },
}