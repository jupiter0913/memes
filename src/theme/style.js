import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  header_style: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderStartColor: 'red',
    flexDirection: 'row',
    width: width - 40,
    justifyContent: 'space-between'
  },
  icon_style: {
    width: 30,
    height: 30,
  },
}