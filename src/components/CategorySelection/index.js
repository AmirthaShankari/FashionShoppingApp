// React Imports
import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

// App Imports
import { Metrics, Colors, CommonStyles } from '../../themes';
import { log } from '../../utils/logger';

const CategorySelection = ({ categories, selectedCategory, updateSelection }) => {

    log.info('Category Selection component Initialized! selected Category...', selectedCategory);

    const renderItem = ({ item }) => {
        const selected = selectedCategory === item.KEY ? true : false;
        return <TouchableOpacity onPress={() => updateSelection(item.KEY)}>
            <View style={[styles.item, selected ? styles.itemSelected : '']}>
                <Text style={[styles.title, selected ? styles.titleSelected : '']}>{item.DISPLAY_NAME}</Text>
            </View>
        </TouchableOpacity>
    };

    return (
        <View style={styles.categoryWrapper}>
            <FlatList
                horizontal
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.KEY}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
export default CategorySelection;
