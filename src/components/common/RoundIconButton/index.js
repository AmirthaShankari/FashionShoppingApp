// React Imports
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

// App Imports
import { Colors } from '../../../themes';
import { log } from '../../../utils/logger';

const RoundIconButton = ({ children, color }) => {
    log.info('Round button initialized!')
    return (
        <View style={[styles.roundButton, styles[color]]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    roundButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: Colors.white
    },
    white: {
        backgroundColor: Colors.white
    },
    grey: {
        backgroundColor: Colors.grey_light
    }
});
export default RoundIconButton;
