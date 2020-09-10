// React Imports
import React, { useEffect, useReducer } from 'react';
import { View, ActivityIndicator, Text, FlatList, Image } from 'react-native';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';
import OffersService from '../../services/OffersService';
import { AppConstants } from '../../constants/AppConstants';
import { AppMessages } from '../../constants/AppMessages';

const offersService = new OffersService();
const C = AppConstants.COMPONENTS.OFFERS_SECTION;
const MESSAGES = AppMessages.COMPONENTS.OFFERS_SECTION;

const OffersSection = React.memo(() => {
    log.info('Offer Section Initialized!');

    // Defining reducer hook
    const initialState = {
        loading: true,
        offersList: [],
        error: ''
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case C.REDUCER_ACTION_TYPES.LOADING:
                return { loading: true, offersList: [], error: '' }
            case C.REDUCER_ACTION_TYPES.DATA:
                return { loading: false, offersList: action.payload, error: '' };
            case C.REDUCER_ACTION_TYPES.ERROR:
                return { loading: false, offersList: [], error: action.payload };
            default:
                return { ...state }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    // Defining component side effect
    useEffect(() => {
        const getOffers = async () => {
            try {
                const offers = await offersService.getOffersList();
                dispatch({
                    type: C.REDUCER_ACTION_TYPES.DATA,
                    payload: offers
                });
            } catch (err) {
                dispatch({
                    type: C.REDUCER_ACTION_TYPES.ERROR,
                    payload: MESSAGES.ERROR
                });
            }
        }
        getOffers();
    }, [])

    const renderItem = ({ item }) => {
        return <View style={styles.offerItem}>
            <Image
                style={styles.offerImg}
                source={{
                    uri: item.modelImg,
                }}
                resizeMode='cover'
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
            {(state.loading) ?
                <ActivityIndicator style={styles.inlineLoader} /> :
                (state.error) ?
                    <Text>{state.error}</Text> :
                    (state.offersList.length > 0) ?
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={state.offersList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        /> :
                        <Text>{MESSAGES.NO_VALID_OFFERS}</Text>}
        </View>
    );
});


export default OffersSection;
