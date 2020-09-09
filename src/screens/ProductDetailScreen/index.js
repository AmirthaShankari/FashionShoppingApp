// React Imports
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

// App Imports
import { CommonStyles, Metrics, Colors } from '../../themes';
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
import RoundIconButton from '../../components/common/RoundIconButton';

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
                <Header showBack={true} />
            </View>

            {/* BEGIN :: ADD TO CART SECTION */}
            <View style={styles.addToCartSection}>
                <TouchableOpacity>
                    <RoundIconButton color='grey'>
                        <Heart width={20} height={20} />
                    </RoundIconButton>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 20 }}>
                    <RoundIconButton color='grey'>
                        <Hanger width={25} height={25} />
                    </RoundIconButton>
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

const styles = StyleSheet.create({
    ...CommonStyles.screen,
    ...CommonStyles.heading,
    fixedHeader: {
        position: 'absolute',
        top: Metrics.screenHeight * .025,
        left: 0,
    },
    productDetail: {
        position: 'relative'
    },
    productDetailWrapper: {
        marginBottom: Metrics.margin_3 * 4
    },
    productImg: {
        width: Metrics.screenWidth,
        height: Metrics.screenHeight * (.6)
    },
    addToCartSection: {
        position: "absolute",
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Metrics.screenWidth,
        padding: Metrics.padding_2,
        backgroundColor: Colors.white,
        elevation: 10
    },
    addToCartBtn: {
        flex: 1,
        paddingVertical: Metrics.padding_2,
        backgroundColor: Colors.black,
        borderRadius: 5,
        marginLeft: Metrics.margin_2
    },
    addToCartText: {
        color: Colors.white,
        textAlign: "center",
    }
});

export default ProductDetailScreen;
