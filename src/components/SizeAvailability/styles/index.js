import { StyleSheet } from 'react-native';
// App Imports 
import { Metrics, Colors, CommonStyles } from '../../../themes';

export const styles = StyleSheet.create({
    ...CommonStyles.loader,
    ...CommonStyles.heading,
    ...CommonStyles.commons,
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
    },
    selectedSize: {
        color: Colors.orange
    }
});