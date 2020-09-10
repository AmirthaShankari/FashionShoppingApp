import { StyleSheet } from 'react-native';
//App Imports
import { CommonStyles, Metrics, Colors } from '../../../themes';

export const styles = StyleSheet.create({
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