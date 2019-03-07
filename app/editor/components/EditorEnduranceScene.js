import React from 'react';
import { StyleSheet } from 'react-native';

import { HEADER_HEIGHT } from 'app/common/styles/commonStyles';

import EditorEndurancePane from './EditorEndurancePane';

export default class EditorEnduranceScene extends React.PureComponent {
    render() {
        return <EditorEndurancePane style={styles.main} />;
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: HEADER_HEIGHT,
        padding: 10,
        height: '100%'
    }
});
