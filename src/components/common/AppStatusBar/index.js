// React Imports
import React from 'react';
import { StatusBar } from 'react-native'


const AppStatusBar = React.memo(() => {
    return (
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    );
});

export default AppStatusBar;
