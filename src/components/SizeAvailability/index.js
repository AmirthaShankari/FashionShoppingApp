// React Imports
import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

// App Imports
import { Metrics, Colors, CommonStyles } from '../../themes';
import { log } from '../../utils/logger';
import { AppMessages } from '../../constants/AppMessages';

const MESSAGE = AppMessages.COMPONENTS.SIZE_AVAILABILITY;

const SizeAvailability = React.memo(({ sizes, selectedSize, updateSizeSelection }) => {
    log.info('Size availability Initialized!');


    return (
        <View style={[styles.sizeAvailability, styles.horizontalFlex]}>
            <View>
                <Text style={styles.greyText}>
                    {MESSAGE.AVAILABLE_SIZES}
                </Text>
            </View>
            <View style={styles.sizeAvailable}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={sizes}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <View style={styles.sizeWrapper}>
                            <TouchableOpacity
                                onPress={
                                    () => { updateSizeSelection(item) }
                                }>
                                <Text style={[styles.h6, styles.size, (selectedSize === item) ? styles.selectedSize : null]}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
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

export default SizeAvailability;
