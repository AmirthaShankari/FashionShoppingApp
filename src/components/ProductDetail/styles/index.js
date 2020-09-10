import { StyleSheet } from 'react-native';
// App Imports
import { Metrics, Colors, CommonStyles } from '../../../themes';

export const styles = StyleSheet.create({
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