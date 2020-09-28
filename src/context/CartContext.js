/* eslint-disable no-case-declarations */
// Libraries Import
import AsyncStorage from '@react-native-community/async-storage';

// App Imports
import CreateContext from './createContext';
import { AppConstants } from '../constants/AppConstants';
import { log } from '../utils/logger';

// Constants declaration
const C = AppConstants.CONTEXTS.CART_CONTEXT;

// Defining the reducer function to manage cart context
const cartReducer = (state, action) => {
  switch (action.type) {
    case C.ADD_TO_CART:
      const newCart = [...state.cart, action.payload];
      AsyncStorage.setItem(
        AppConstants.ASYNC_STORAGE.CART,
        JSON.stringify(newCart),
      );
      return { ...state, cart: newCart };
    case C.GET_CART:
      return { ...state };
    case C.GET_STORED_CART:
      return { ...state, cart: action.payload };
    default:
      return { ...state };
  }
};

// Function to add items to cart
const addToCart = (dispatch) => async (item) => {
  try {
    const cartItem = { id: item.id, size: item.size };
    dispatch({ type: C.ADD_TO_CART, payload: cartItem });
  } catch (err) {
    log.error('Error while adding to cart!');
  }
};

// Function to get the current cart details
const getCart = (dispatch) => () => {
  dispatch({ type: C.GET_CART });
};

// Function to get the cart details stored in local storage
const getStoredCart = (dispatch) => async () => {
  try {
    let storedCart = await AsyncStorage.getItem(
      AppConstants.ASYNC_STORAGE.CART,
    );
    log.info('Fetching the stored cart! stored cart...', storedCart);
    if (!storedCart) {
      storedCart = [];
      await AsyncStorage.setItem(
        AppConstants.ASYNC_STORAGE.CART,
        JSON.stringify(storedCart),
      );
      log.info('set default stored cart...', storedCart);
    } else {
      log.info('stored cart from storage...', storedCart);
      storedCart = JSON.parse(storedCart);
    }
    dispatch({ type: C.GET_STORED_CART, payload: storedCart });
  } catch (err) {
    log.error('Error while getting the stored cart!');
  }
};

export const { Context, Provider } = CreateContext(
  cartReducer,
  { cart: [] },
  { addToCart, getCart, getStoredCart },
);
