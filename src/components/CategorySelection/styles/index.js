import { StyleSheet } from 'react-native';

// App Imports 
import { Metrics, Colors, CommonStyles } from '../../../themes';

export const styles = StyleSheet.create({
    categoryWrapper: {
        width: Metrics.screenWidth,
        borderBottomWidth: 2,
        borderBottomColor: Colors.grey_light
    },
    item: {
        paddingHorizontal: Metrics.padding_3,
        paddingVertical: Metrics.padding_1
    },
    title: {
        ...CommonStyles.fontWeights.w400,
        fontSize: 18,
        color: Colors.grey
    },
    titleSelected: {
        color: Colors.black,
    },
    itemSelected: {
        borderBottomWidth: 5,
        borderBottomColor: Colors.black
    }
});