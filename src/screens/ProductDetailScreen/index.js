// React Imports
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

// App Imports
import { AppMessages } from '../../constants/AppMessages';
import { AppConstants } from '../../constants/AppConstants';
import { CommonStyles } from '../../themes';
import { log } from '../../utils/logger';


const ProductDetailScreen = ({ route }) => {

    const { product } = route.params;
    log.info('Rendering Product detail Screen!!', product);

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <Text>
                    Product Detail Screen
                </Text>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    ...CommonStyles.screen,
});

export default ProductDetailScreen;
