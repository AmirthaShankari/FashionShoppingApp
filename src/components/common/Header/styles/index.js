import { StyleSheet } from 'react-native';
import { Colors, Metrics, CommonStyles } from '../../../../themes';

export const styles = StyleSheet.create({
    ...CommonStyles.heading,
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Metrics.screenWidth,
        backgroundColor: Colors.transparent,
        padding: Metrics.padding_2
    },
    solidBg: {
        backgroundColor: Colors.white
    }
});