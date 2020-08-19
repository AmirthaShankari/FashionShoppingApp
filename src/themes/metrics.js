import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  margin: 10,
  margin_1: 20,
  padding: 10,
  padding_2: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  buttonRadius: 4,
};

export default metrics;
