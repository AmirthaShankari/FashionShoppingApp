import { StyleSheet } from 'react-native';
// App Imports
import { Metrics, CommonStyles } from '../../../themes';

export const styles = StyleSheet.create({
    ...CommonStyles.loader,
    ...CommonStyles.heading,
    productsWrapper: {
        paddingVertical: Metrics.padding_3,
        paddingBottom: Metrics.padding_3 * 3
    },
    productCard: {
        width: 150,
        marginVertical: Metrics.margin_3,
        marginLeft: Metrics.margin_3
    },
    heading: {
        marginHorizontal: Metrics.margin_3
    },
    productImg: {
        height: 220,
        borderRadius: 5
    },
    productName: {
        paddingVertical: Metrics.padding_1,
        marginBottom: Metrics.margin_3,
        fontSize: 16,
        ...CommonStyles.fontWeights.w300
    }
});