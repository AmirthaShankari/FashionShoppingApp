// React Imports
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// App Imports
import { Metrics, Colors, CommonStyles } from '../../themes';
import { log } from '../../utils/logger';
import { AppMessages } from '../../constants/AppMessages';
import Star from '../../assets/icons/star.svg';

// Constants Declaration
const MESSAGES = AppMessages.COMPONENTS.PRODUCT_DETAIL;

const ProductDetail = React.memo(({ productDetail }) => {
    log.info('ProductDetail Initialized!');

    return (
        <View >
            {/* BEGIN :: PRODUCT IMAGE SECTION  */}
            <Image
                style={styles.productImg}
                source={{
                    uri: productDetail.product_image,
                }}
                resizeMode='cover'
            />
            {/* END :: PRODUCT IMAGE SECTION  */}

            {/* BEGIN :: PRODUCT DETAIL SECTION  */}
            <View style={styles.productDetail}>
                <Text style={styles.h5}>{productDetail.product_name}</Text>
                <View style={[styles.horizontalFlex, styles.priceRatingWrapper]}>
                    <View>
                        <Text style={styles.currentPrice}>{productDetail.price_details.currency_code} {productDetail.price_details.current_price}</Text>
                        <View style={styles.horizontalFlex}>
                            <Text style={[styles.actualPrice, styles.greyText]}>{productDetail.price_details.currency_code} {productDetail.price_details.actual_price}</Text>
                            <Text style={styles.discount}>{productDetail.price_details.discount} {MESSAGES.OFF}</Text>
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
        </View>
    );
});

const styles = StyleSheet.create({
    ...CommonStyles.loader,
    ...CommonStyles.heading,
    ...CommonStyles.commons,
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
