// React Imports
import React, { useEffect, useReducer } from 'react';
import { View, ActivityIndicator, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';
import { AppConstants } from '../../constants/AppConstants';
import { AppMessages } from '../../constants/AppMessages';
import ProductsService from '../../services/ProductsService';

// Constants and service variables declaration
const productsService = new ProductsService();
const C = AppConstants.COMPONENTS.PRODUCTS_LIST;
const MESSAGES = AppMessages.COMPONENTS.PRODUCTS_LIST;

const ProductsList = React.memo(({ selectedCategory }) => {
    log.info('Products List Initialized!');
    const navigation = useNavigation();

    // Defining reducer hook
    const initialState = {
        loading: true,
        productsList: [],
        error: ''
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case C.REDUCER_ACTION_TYPES.LOADING:
                return { loading: true, productsList: [], error: '' }
            case C.REDUCER_ACTION_TYPES.DATA:
                return { loading: false, productsList: action.payload, error: '' };
            case C.REDUCER_ACTION_TYPES.ERROR:
                return { loading: false, productsList: [], error: action.payload };
            default:
                return { ...state }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    // Defining Side Effects
    useEffect(() => {
        log.info('selected category in products List...', selectedCategory)
        const getProductsList = async () => {
            try {
                dispatch({ type: C.LOADING });
                const products = await productsService.fetchProductsList(selectedCategory);
                dispatch({
                    type: C.REDUCER_ACTION_TYPES.DATA,
                    payload: products
                })
            } catch (err) {
                dispatch({
                    type: C.REDUCER_ACTION_TYPES.ERROR,
                    payload: MESSAGES.ERROR
                })
            }
        }
        getProductsList();
    }, [selectedCategory])

    const renderItem = ({ item }) => {
        return <TouchableOpacity onPress={() => { navigation.navigate(AppConstants.ROUTES.PRODUCT_DETAIL, { product: item }) }}>
            <View style={styles.productCard}>
                {/* BEGIN :: PRODUCT IMAGE */}
                <Image
                    style={styles.productImg}
                    source={{
                        uri: item.product_image,
                    }}
                    resizeMode='cover'
                />
                {/* END :: PRODUCT IMAGE */}

                {/* BEGIN :: PRODUCT NAME */}
                <Text style={styles.productName}>
                    {item.product_name}
                </Text>
                {/* END :: PRODUCT NAME */}
            </View >
        </TouchableOpacity>
    };

    return (
        <View style={styles.productsWrapper}>
            {(state.loading) ?
                <ActivityIndicator style={styles.inlineLoader} /> :
                (state.error) ?
                    <Text>{state.error}</Text> : <View>
                        <Text style={[styles.h5, styles.heading]}>{MESSAGES.TITLE}</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={state.productsList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>}
        </View>
    );
});



export default ProductsList;
