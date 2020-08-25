// React Imports
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// App Imports
import { Colors, CommonStyles } from '../../../themes';
import { log } from '../../../utils/logger';

const RoundIconButton = ({ children, color, badgeValue }) => {
    log.info('Round button initialized!')
    return (
        <View style={[styles.roundButton, styles[color]]}>
            {children}
            {(badgeValue && badgeValue > 0) ? <View style={styles.badge}>
                <Text style={[styles.badgeCount, styles.h6]}>{badgeValue}</Text>
            </View> : <View></View>}
        </View>
    );
}

const styles = StyleSheet.create({
    ...CommonStyles.heading,
    roundButton: {
        position: 'relative',
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: Colors.white
    },
    badge: {
        position: 'absolute',
        top: 10,
        right: 10,
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
export default RoundIconButton;
