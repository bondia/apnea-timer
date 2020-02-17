import React from 'react';

import TextComponent from '../../../common/components/TextComponent';
import { ActionArea, styles } from './Menu.styled';

interface MenuItemProps {
    title: string;
    type: string;
    onPress: (type: string) => void;
    color: string;
}

export default function MenuItem(props: MenuItemProps): JSX.Element {
    const {
        title,
        type,
        onPress,
        color
    } = props;

    return (
        <ActionArea onPress={() => onPress(type)} color={color}>
            <TextComponent style={styles.baseStyles}>
                {title}
            </TextComponent>
        </ActionArea>
    );
}
