// React Imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, FlatList, Image } from 'react-native';

// App Imports
import { Metrics, Colors, CommonStyles } from '../../themes';
import { log } from '../../utils/logger';

const ProductsList = React.memo(({ selectedCategory }) => {
    log.info('Products List Initialized!');

    // State Declaration
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        log.info('selected category in products List...', selectedCategory)
        setLoading(true);
        setTimeout(() => {
            if (selectedCategory === 'MAN') {
                setProductsList([{ "id": 1, "product_image": "https://i.ibb.co/9HgCvMk/model-2.png", "product_name": "Black Mamba Sleeve Shirt 1", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 2, "product_image": "https://i.ibb.co/XphhTtj/model.png", "product_name": "Black Mamba Sleeve Shirt 2", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 3, "product_image": "https://i.ibb.co/9HgCvMk/model-2.png", "product_name": "Black Mamba Sleeve Shirt 3", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 4, "product_image": "https://i.ibb.co/XphhTtj/model.png", "product_name": "Black Mamba Sleeve Shirt 4", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }])
            } else if (selectedCategory === 'WOMAN') {
                setProductsList([{ "id": 5, "product_image": "https://i.ibb.co/m47n3fk/model-3.png", "product_name": "Black Mamba Sleeve Shirt 1", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 6, "product_image": "https://i.ibb.co/f1V2XT6/female-model-2.jpg.png", "product_name": "Black Mamba Sleeve Shirt 2", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 7, "product_image": "https://i.ibb.co/f1V2XT6/female-model-2.jpg.png", "product_name": "Black Mamba Sleeve Shirt 3", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 8, "product_image": "https://i.ibb.co/m47n3fk/model-3.png", "product_name": "Black Mamba Sleeve Shirt 4", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }])
            } else if (selectedCategory === 'KIDS') {
                setProductsList([{ "id": 9, "product_image": "https://i.pinimg.com/originals/d7/d8/0a/d7d80ab4f1dff4cf20432c8992fc097d.jpg", "product_name": "Black Mamba Sleeve Shirt 1", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 10, "product_image": "https://ae01.alicdn.com/kf/HTB1ppUzLYPpK1RjSZFFq6y5PpXaq/LUOBOBEIBEI-Boys-Suits-Formal-Children-Costume-For-Boy-Wedding-Suit-Kids-Blazer-5-Pieces-Summer-Child.jpg", "product_name": "Black Mamba Sleeve Shirt 2", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 11, "product_image": "https://i.pinimg.com/originals/d7/d8/0a/d7d80ab4f1dff4cf20432c8992fc097d.jpg", "product_name": "Black Mamba Sleeve Shirt 3", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }, { "id": 12, "product_image": "https://ae01.alicdn.com/kf/HTB1ppUzLYPpK1RjSZFFq6y5PpXaq/LUOBOBEIBEI-Boys-Suits-Formal-Children-Costume-For-Boy-Wedding-Suit-Kids-Blazer-5-Pieces-Summer-Child.jpg", "product_name": "Black Mamba Sleeve Shirt 4", "price_details": { "currency_code": "RM", "current_price": 120, "actual_price": 130, "discount": "15%" }, "rating_details": { "scale": 5, "rating": 4.9 }, "available_sizes": ["XS", "S", "M", "L", "XL"] }])
            }
            setLoading(false);
        }, 3000)
    }, [selectedCategory])

    const renderItem = ({ item }) => {
        return <View style={styles.productCard}>
            <Image
                style={styles.productImg}
                source={{
                    uri: item.product_image,
                }}
            />
            <Text style={styles.productName}>
                {item.product_name}
            </Text>
        </View >
    };

    return (
        <View style={styles.productsWrapper}>
            {(loading) ?
                <ActivityIndicator style={styles.inlineLoader} /> :
                (error) ?
                    <Text>Something went wrong!</Text> : <View>
                        <Text style={[styles.h5, styles.heading]}>Most Popular Products</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={productsList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>}
        </View>
    );
});

const styles = StyleSheet.create({
    ...CommonStyles.loader,
    ...CommonStyles.heading,
    productsWrapper: {
        paddingVertical: Metrics.padding_3
    },
    productCard: {
        width: 150,
        marginVertical: Metrics.margin_3,
        marginLeft: Metrics.margin_3
    },
    heading: {
        marginHorizontal: Metrics.margin_3
    },
    productImg: {
        height: 220,
        borderRadius: 5
    },
    productName: {
        paddingVertical: Metrics.padding_1,
        fontSize: 16,
        ...CommonStyles.fontWeights.w300
    }
});

export default ProductsList;
