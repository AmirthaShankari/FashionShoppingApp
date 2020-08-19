import Colors from './colors';

const fontsMapping = {
  w100: {
    fontFamily: 'Roboto-Light'
  },
  w300: {
    fontFamily: 'Roboto-Thin'
  },
  w400: {
    fontFamily: 'Roboto-Regular'
  },
  w500: {
    fontFamily: 'Roboto-Medium'
  },
  w700: {
    fontFamily: 'Roboto-Black'
  },
  w900: {
    fontFamily: 'Roboto-Bold'
  }
}

const CommonStyles = {
  fontWeights: {
    ...fontsMapping
  },
  heading: {
    h1: {
      fontSize: 34,
      ...fontsMapping.w700
    },
    h2: {
      fontSize: 30,
      ...fontsMapping.w700
    },
    h3: {
      fontSize: 26,
      ...fontsMapping.w700
    },
    h4: {
      fontSize: 22,
      ...fontsMapping.w500
    },
    h5: {
      fontSize: 18,
      ...fontsMapping.w500
    },
    h6: {
      fontSize: 14,
      ...fontsMapping.w500
    },
  },
  loader: {
    inlineLoader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white,
      fontFamily: 'Roboto',
    },
  },
};

export default CommonStyles;
