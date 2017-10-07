import React from 'react';
import { StyleSheet } from 'react-native';

import { HEADER_HEIGHT } from 'app/common/styles/commonStyles';

import Menu from './Menu';

class MainScene extends React.PureComponent {
    render() {
        return <Menu style={styles.main} />;
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: HEADER_HEIGHT
    }
});

export default MainScene;
