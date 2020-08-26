import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  margin_1: 10,
  margin_2: 20,
  margin_3: 30,
  padding_1: 10,
  padding_2: 20,
  padding_3: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  buttonRadius: 4,
};

export default metrics;
