import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  screenWidth: width,
  screenHeight: height,

  get isAndroid(): boolean {
    return Platform.OS === 'android';
  },

  get isIOS(): boolean {
    return Platform.OS === 'ios';
  },

  noop: () => {}
};
