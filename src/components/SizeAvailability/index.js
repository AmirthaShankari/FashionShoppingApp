// React Imports
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// App Imports
import { styles } from './styles';
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



export default SizeAvailability;
