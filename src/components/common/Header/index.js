// React Imports
import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// App Imports
import { Colors, Metrics, CommonStyles } from '../../../themes';
import { log } from '../../../utils/logger';
import RoundIconButton from '../RoundIconButton';
import Cart from '../../../assets/icons/cart.svg';
import Back from '../../../assets/icons/back.svg';
import { Context as CartContext } from '../../../context/CartContext';
import { AppMessages } from '../../../constants/AppMessages';

const Header = ({ solid, showBack }) => {
    log.info('Header initialized!')
    const navigation = useNavigation();
    const MESSAGE = AppMessages.COMPONENTS.HEADER;

    // Extracting the cart information from cart context
    const { state: { cart } } = useContext(CartContext);

    return (
        <View style={[styles.header, (solid) ? solidBg : null]}>
            {(showBack) ? (
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <View>
                        <RoundIconButton color='white'>
                            <Back />
                        </RoundIconButton>
                    </View>
                </TouchableOpacity>
            ) : (
                    <Text style={styles.h5}>{MESSAGE.APP_LOGO}</Text>
                )}
            <TouchableOpacity>
                <RoundIconButton color='white' badgeValue={cart.length}>
                    <Cart />
                </RoundIconButton>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    ...CommonStyles.heading,
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Metrics.screenWidth,
        backgroundColor: Colors.transparent,
        padding: Metrics.padding_2
    },
    solidBg: {
        backgroundColor: Colors.white
    }
});
export default Header;
