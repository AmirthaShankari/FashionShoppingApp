// React Imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, FlatList, Image } from 'react-native';

// App Imports
import { Metrics, Colors, CommonStyles } from '../../themes';
import { log } from '../../utils/logger';

const OffersSection = React.memo(() => {
    log.info('Offer Section Initialized!');

    // State Declaration
    const [offersList, setOffersList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setOffersList([{ "id": 1, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://i.ibb.co/XphhTtj/model.png" }, { "id": 2, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://i.ibb.co/m47n3fk/model-3.png" }, { "id": 3, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://i.pinimg.com/originals/d7/d8/0a/d7d80ab4f1dff4cf20432c8992fc097d.jpg" }, { "id": 4, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://i.ibb.co/9HgCvMk/model-2.png" }, { "id": 5, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://i.ibb.co/f1V2XT6/female-model-2.jpg.png" }, { "id": 6, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://ae01.alicdn.com/kf/HTB1ppUzLYPpK1RjSZFFq6y5PpXaq/LUOBOBEIBEI-Boys-Suits-Formal-Children-Costume-For-Boy-Wedding-Suit-Kids-Blazer-5-Pieces-Summer-Child.jpg" }, { "id": 7, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://i.ibb.co/9HgCvMk/model-2.png" }, { "id": 8, "discountText": "Get 25% for Our Latest Arrial", "discountCode": "NEW25", "discountSlogan": "Beeing update with the latest product from us", "modelImg": "https://i.ibb.co/9HgCvMk/model-2.png" }])
            setLoading(false);
        }, 3000)
    }, [])

    const renderItem = ({ item }) => {
        return <View style={styles.offerItem}>
            <Image
                style={styles.offerImg}
                source={{
                    uri: item.modelImg,
                }}
            />
            <View style={styles.offerDetails}>
                <View style={styles.discountText}>
                    <Text style={[styles.h3, styles.offerText]}>
                        {item.discountText}
                    </Text>
                </View>
                <View style={styles.discountWrapper}>
                    <Text style={[styles.h5, styles.offerText]}>
                        Use Code :
                    </Text>
                    <View style={styles.discountCode}>
                        <Text style={[styles.h5, styles.offerText]}>
                            {item.discountCode}
                        </Text>
                    </View>
                </View>
                <Text style={[styles.h5, styles.offerText, styles.discountSlogan]}>
                    {item.discountSlogan}
                </Text>
            </View>
        </View >
    };

    return (
        <View style={styles.offerSection}>
            {(loading) ?
                <ActivityIndicator style={styles.inlineLoader} /> :
                (error) ?
                    <Text>Something went wrong!</Text> :
                    (offersList.length > 0) ?
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={offersList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        /> :
                        <Text>No Valid offers</Text>}
        </View>
    );
});

const styles = StyleSheet.create({
    ...CommonStyles.loader,
    ...CommonStyles.heading,
    offerSection: {
        height: Metrics.screenHeight / 2,
        backgroundColor: Colors.grey_light,
        paddingVertical: Metrics.padding_3
    },
    offerItem: {
        position: "relative",
        width: Metrics.screenWidth * (.7),
        marginLeft: Metrics.margin_3,
        borderRadius: 10
    },
    offerImg: {
        flex: 1,
        borderRadius: 5,
        overflow: "hidden"
    },
    offerDetails: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: Metrics.screenWidth * (.7),
        paddingHorizontal: Metrics.padding_2,
        backgroundColor: Colors.semiTransparent
    },
    offerText: {
        color: Colors.white,
    },
    discountWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: Metrics.margin_2
    },
    discountCode: {
        marginLeft: Metrics.margin_1 / 3,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white
    },
    discountSlogan: {
        marginBottom: Metrics.margin_2
    },
    discountText: {
        paddingVertical: Metrics.padding_2,
        borderBottomColor: Colors.white,
        borderBottomWidth: 0.5
    }
});

export default OffersSection;
