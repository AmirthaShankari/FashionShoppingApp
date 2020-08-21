// React Imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

// App Imports
import { AppMessages } from '../../constants/AppMessages';
import { AppConstants } from '../../constants/AppConstants';
import { CommonStyles, Metrics, Colors } from '../../themes';
import { log } from '../../utils/logger';
import ProductDetail from '../../components/ProductDetail';
import RoundIconButton from '../../components/common/RoundIconButton';
import Heart from '../../assets/icons/heart.svg';
import Hanger from '../../assets/icons/hanger.svg';
import Header from '../../components/common/Header';


const ProductDetailScreen = ({ route }) => {
    log.info('Rendering Product detail Screen!!');
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const { product } = route.params;
        setProductDetail(product);
    }, [])

    return (
        <View style={[styles.productDetail, styles.mainContainer]}>
            {/* BEGIN :: PRODUCT DETAIL SECTION */}
            <ScrollView>
                {(productDetail) ?
                    <View>
                        <ProductDetail productDetail={productDetail} />
                    </View>
                    : <Text>No detail</Text>}
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
                <TouchableOpacity style={styles.addToCartBtn} onPress={() => { console.log('testing') }}>
                    <Text style={[styles.h5, styles.addToCartText]}>
                        Add To Cart
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
        top: 70,
        left: 0,
    },
    productDetail: {
        position: 'relative'
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
