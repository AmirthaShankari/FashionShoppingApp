import { StyleSheet } from 'react-native';
// App Imports
import { Metrics, Colors, CommonStyles } from '../../../themes';

export const styles = StyleSheet.create({
    ...CommonStyles.loader,
    ...CommonStyles.heading,
    offerSection: {
        height: Metrics.screenHeight / 2,
        backgroundColor: Colors.grey_light,
        paddingVertical: Metrics.padding_3
    },
    offerItem: {
        position: "relative",
        width: (Metrics.screenWidth * (.7) < 400) ? Metrics.screenWidth * (.7) : 400,
        maxWidth: 400,
        marginLeft: Metrics.margin_3,
        borderRadius: 10
    },
    offerImg: {
        flex: 1,
        borderRadius: 5,
        overflow: "hidden"
    },
    offerDetails: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: (Metrics.screenWidth * (.7) < 400) ? Metrics.screenWidth * (.7) : 400,
        paddingHorizontal: Metrics.padding_2,
        backgroundColor: Colors.semiTransparent
    },
    offerText: {
        color: Colors.white,
    },
    discountWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: Metrics.margin_2
    },
    discountCode: {
        marginLeft: Metrics.margin_1 / 3,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white
    },
    discountSlogan: {
        marginBottom: Metrics.margin_2
    },
    discountText: {
        paddingVertical: Metrics.padding_2,
        borderBottomColor: Colors.white,
        borderBottomWidth: 0.5
    }
});