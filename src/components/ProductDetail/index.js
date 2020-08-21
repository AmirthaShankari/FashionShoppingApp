// React Imports
import React, { useEffect, useReducer } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, FlatList, Image, TouchableOpacity } from 'react-native';

// App Imports
import { Metrics, Colors, CommonStyles, Images } from '../../themes';
import { log } from '../../utils/logger';
import OffersService from '../../services/OffersService';
import { AppConstants } from '../../constants/AppConstants';
import { AppMessages } from '../../constants/AppMessages';
import Star from '../../assets/icons/star.svg';

const offersService = new OffersService();
const C = AppConstants.COMPONENTS.OFFERS_SECTION;
const MESSAGES = AppMessages.COMPONENTS.OFFERS_SECTION;

const ProductDetail = ({ productDetail }) => {
    log.info('ProductDetail Initialized!');

    return (
        <View style={styles.ProductWrapper}>
            <Image
                style={styles.productImg}
                source={{
                    uri: productDetail.product_image,
                }}
                resizeMode='cover'
            />
            {/* BEGIN :: PRODUCT DETAIL SECTION  */}
            <View style={styles.productDetail}>
                <Text style={styles.h5}>{productDetail.product_name}</Text>
                <View style={[styles.horizontalFlex, styles.priceRatingWrapper]}>
                    <View>
                        <Text style={styles.currentPrice}>{productDetail.price_details.currency_code} {productDetail.price_details.current_price}</Text>
                        <View style={styles.horizontalFlex}>
                            <Text style={[styles.actualPrice, styles.greyText]}>{productDetail.price_details.currency_code} {productDetail.price_details.actual_price}</Text>
                            <Text style={styles.discount}>{productDetail.price_details.discount} OFF</Text>
                        </View>
                    </View>
                    <View style={styles.ratingWrapper}>
                        <Star />
                        <Text style={[styles.rating, styles.greyText]}>
                            {productDetail.rating_details.rating}/{productDetail.rating_details.scale}
                        </Text>
                    </View>
                </View>
            </View>
            {/* END :: PRODUCT DETAIL SECTION  */}

            {/* BEGIN :: SIZE AVAILABILITY SECTION  */}
            <View style={[styles.sizeAvailability, styles.horizontalFlex]}>
                <View>
                    <Text style={styles.greyText}>
                        Size Available :
                        </Text>
                </View>
                <View style={styles.sizeAvailable}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={productDetail.available_sizes}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <View style={styles.sizeWrapper}>
                                <TouchableOpacity>
                                    <Text style={[styles.h6, styles.size]}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>
            {/* END :: SIZE AVAILABILITY SECTION  */}
        </View>
    );
};

const styles = StyleSheet.create({
    ...CommonStyles.loader,
    ...CommonStyles.heading,
    ...CommonStyles.commons,
    ProductWrapper: {
        marginBottom: Metrics.margin_3 * 4
    },
    productImg: {
        width: Metrics.screenWidth,
        height: Metrics.screenHeight * (.7)
    },
    productDetail: {
        padding: Metrics.padding_3
    },
    priceRatingWrapper: {
        justifyContent: 'space-between',
        paddingTop: Metrics.padding_2
    },
    ratingWrapper: {
        alignItems: 'flex-end'
    },
    currentPrice: {
        fontSize: 22,
        ...CommonStyles.fontWeights.w500,
        color: Colors.orange
    },
    actualPrice: {
        textDecorationLine: 'line-through',
        marginTop: Metrics.margin_1 / 2,
    },
    discount: {
        fontSize: 16,
        marginTop: Metrics.margin_1 / 2,
        marginLeft: Metrics.margin_1 / 2,
        ...CommonStyles.fontWeights.w400,
    },
    rating: {
        marginTop: Metrics.margin_1 / 2,
    },
    greyText: {
        fontSize: 16,
        color: Colors.grey,
        ...CommonStyles.fontWeights.w400
    },
    sizeAvailability: {
        padding: Metrics.padding_3,
        backgroundColor: Colors.grey_light
    },
    sizeAvailable: {
        flex: 1,
        marginLeft: Metrics.margin_1
    },
    sizeWrapper: {
        marginLeft: Metrics.margin_2
    },
    size: {
        paddingHorizontal: Metrics.padding_1 * (.6),
    }
});

export default ProductDetail;
