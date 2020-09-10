// React Imports
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// App Imports
import { log } from '../../../utils/logger';
import { styles } from './styles';
import IconButton from '../IconButton';
import Cart from '../../../assets/icons/cart.svg';
import Back from '../../../assets/icons/back.svg';
import { Context as CartContext } from '../../../context/CartContext';
import { AppMessages } from '../../../constants/AppMessages';

const Header = React.memo(({ transparentHeader, showBack, roundButton }) => {
    log.info('Header initialized!')

    const navigation = useNavigation();
    const MESSAGE = AppMessages.COMPONENTS.HEADER;

    // Extracting the cart information from cart context
    const { state: { cart } } = useContext(CartContext);

    return (
        <View style={[styles.header, (!transparentHeader) ? styles.solidBg : null]}>
            {showBack ? (
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <View>
                        <IconButton color='white' roundButton={roundButton}>
                            <Back />
                        </IconButton>
                    </View>
                </TouchableOpacity>
            ) : (
                    <Text style={styles.h5}>{MESSAGE.APP_LOGO}</Text>
                )}
            <TouchableOpacity>
                <IconButton color='white' badgeValue={cart.length} roundButton={roundButton}>
                    <Cart />
                </IconButton>
            </TouchableOpacity>
        </View>
    );
})



export default Header;
