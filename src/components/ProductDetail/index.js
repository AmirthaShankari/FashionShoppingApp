// React Imports
import React from 'react';
import { View, Text, Image } from 'react-native';

// App Imports
import { styles } from './styles';
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


export default ProductDetail;
