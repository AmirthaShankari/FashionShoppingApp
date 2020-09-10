import { StyleSheet } from 'react-native';

// App Imports 
import { Colors, CommonStyles } from '../../../../themes';

export const styles = StyleSheet.create({
    ...CommonStyles.heading,
    roundButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: Colors.white
    },
    iconContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -7,
        right: -7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: Colors.orange,
    },
    badgeCount: {
        color: Colors.white
    },
    white: {
        backgroundColor: Colors.white
    },
    grey: {
        backgroundColor: Colors.grey_light
    }
});