// React Imports
import React from 'react';
import { View, Text } from 'react-native';

// App Imports
import { styles } from './styles';
import { log } from '../../../utils/logger';

const IconButton = React.memo(({ children, color, badgeValue, roundButton }) => {
    log.info('Icon button initialized!')
    return (
        <View style={[(roundButton) ? styles.roundButton : null, styles[color]]}>
            <View style={styles.iconContainer}>
                {children}
                {(badgeValue && badgeValue > 0) ? (
                    <View style={styles.badge}>
                        <Text style={[styles.badgeCount, styles.h6]}>{badgeValue}</Text>
                    </View>
                ) : (
                        null
                    )}
            </View>
        </View>
    );
})


export default IconButton;
