// React Imports
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// App Imports
import { Colors, Metrics, CommonStyles } from '../../../themes';
import { log } from '../../../utils/logger';
import RoundIconButton from '../RoundIconButton';
import Cart from '../../../assets/icons/cart.svg';
import Back from '../../../assets/icons/back.svg';

const Header = ({ solid, showBack }) => {
    log.info('Header initialized!')
    const navigation = useNavigation();
    return (
        <View style={[styles.header, (solid) ? solidBg : null]}>
            {(showBack) ? <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <View>
                    <RoundIconButton color='white'>
                        <Back />
                    </RoundIconButton>
                </View>
            </TouchableOpacity> :
                <Text style={styles.h5}>FASHION</Text>}
            <TouchableOpacity onPress={() => { console.log('testing') }}>
                <RoundIconButton color='white'>
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
