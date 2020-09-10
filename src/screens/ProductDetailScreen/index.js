// React Imports
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';
import Heart from '../../assets/icons/heart.svg';
import Hanger from '../../assets/icons/hanger.svg';
import { AppMessages } from '../../constants/AppMessages';

// Context Imports
import { Context as CartContext } from '../../context/CartContext';

// Components Import
import Header from '../../components/common/Header';
import SizeAvailability from '../../components/SizeAvailability';
import ProductDetail from '../../components/ProductDetail';
import IconButton from '../../components/common/IconButton';
import AppStatusBar from '../../components/common/AppStatusBar';

const ProductDetailScreen = ({ route }) => {
    log.info('Rendering Product detail Screen!!');

    const MESSAGES = AppMessages.SCREENS.PRODUCT_DETAIL;

    // State Declaration and Side effects
    const [productDetail, setProductDetail] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const { product } = route.params;
        setProductDetail(product);
        // Setting default size
        setSelectedSize(product.available_sizes[0]);
    }, [])

    return (
        <View style={[styles.productDetail, styles.mainContainer]}>
            <AppStatusBar />
            {/* BEGIN :: PRODUCT DETAIL SECTION */}
            <ScrollView>
                {(productDetail) ?
                    <View style={styles.productDetailWrapper}>
                        <ProductDetail productDetail={productDetail} />
                        <SizeAvailability sizes={productDetail.available_sizes} selectedSize={selectedSize} updateSizeSelection={setSelectedSize} />
                    </View>
                    : null}
            </ScrollView>
            {/* END:: PRODUCT DETAIL SECTION */}

            <View style={styles.fixedHeader}>
                <Header showBack={true} transparentHeader={true} roundButton={true} />
            </View>

            {/* BEGIN :: ADD TO CART SECTION */}
            <View style={styles.addToCartSection}>
                <TouchableOpacity>
                    <IconButton color='grey' roundButton={true}>
                        <Heart width={20} height={20} />
                    </IconButton>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 20 }}>
                    <IconButton color='grey' roundButton={true}>
                        <Hanger width={25} height={25} />
                    </IconButton>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCartBtn} onPress={() => { addToCart({ ...productDetail, size: selectedSize }) }}>
                    <Text style={[styles.h5, styles.addToCartText]}>
                        {MESSAGES.BUTTON_TXT.ADD_TO_CART}
                    </Text>
                </TouchableOpacity>
            </View>
            {/* END :: ADD TO CART SECTION */}
        </View>
    );
};



export default ProductDetailScreen;
