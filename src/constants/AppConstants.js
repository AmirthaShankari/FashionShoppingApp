export const AppConstants = {
  ROUTES: {
    HOME: 'Home',
    PRODUCT_DETAIL: 'ProductDetail'
  },
  API_ENDPOINTS: {
    OFFERS: '/fe464bd8-b363-41e5-8dc5-b6fb3840d31b',
    MAN: '/f8c7e102-1938-459d-af39-c66604324a8f',
    WOMAN: '/58bb1ab5-abb9-4bb1-ae26-276aa2f7f181',
    KIDS: '/e85db56a-8a02-475e-9342-49f6cbec8919'
  },
  SCREENS: {
    HOME: {
      CATEGORIES: [
        {
          KEY: 'MAN',
          DISPLAY_NAME: 'Man',
          DEFAULT: true
        },
        {
          KEY: 'WOMAN',
          DISPLAY_NAME: 'Woman',
          DEFAULT: false
        },
        {
          KEY: 'KIDS',
          DISPLAY_NAME: 'Kids',
          DEFAULT: false
        }
      ]
    }
  },
  COMPONENTS: {
    OFFERS_SECTION: {
      REDUCER_ACTION_TYPES: {
        LOADING: 'LOADING',
        DATA: 'DATA',
        ERROR: 'ERROR'
      }
    },
    PRODUCTS_LIST: {
      REDUCER_ACTION_TYPES: {
        LOADING: 'LOADING',
        DATA: 'DATA',
        ERROR: 'ERROR'
      }
    }
  }
};
