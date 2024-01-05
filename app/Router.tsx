import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC } from 'react';
import { RoutesEnum } from './Routes';
import CronoScene from './modules/crono/CronoScene';
import EditorEnduranceScene from './modules/editor/scenes/EditorEnduranceScene';
import EditorStaticScene from './modules/editor/scenes/StaticEditorScene';
import MouthfillScene from './modules/mouthfill/MouthfillScene';
import SelectorScene from './modules/selector/SelectorScene';
import SettingsScene from './modules/settings/SettingsScene';
import ColorsScene from './modules/stories/Scenes/ColorsScene';
import StoriesMenuScene from './modules/stories/Scenes/StoriesMenuScene';
import StoriesScene from './modules/stories/Scenes/StoriesScene';
import TypographyScene from './modules/stories/Scenes/TypographyScene';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRouter: FC = () => {
  deactivateKeepAwake();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={RoutesEnum.MENU}
        screenOptions={{ headerShown: false }}
      >
        {/* Main */}
        <Screen
          name={RoutesEnum.MENU}
          component={SelectorScene}
          options={{ title: 'Apnea' }}
        />

        {/* Create tables */}
        <Screen
          name={RoutesEnum.CREATE_TABLE_SCENE}
          component={EditorStaticScene}
          options={{ title: 'CO2/O2' }}
        />
        <Screen
          name={RoutesEnum.ENDURANCE_TABLE_SCENE}
          component={EditorEnduranceScene}
          options={{ title: 'Endurance' }}
        />

        {/* Crono */}
        <Screen
          name={RoutesEnum.CRONO_SCENE}
          component={CronoScene}
          options={{ title: 'Crono', headerShown: false }}
        />

        {/* Freediving Utils */}
        <Screen
          name={RoutesEnum.MF_DEPTH}
          component={MouthfillScene}
          options={{ title: 'MF DEPTH' }}
        />

        {/* User */}
        <Screen
          name={RoutesEnum.SETTINGS}
          component={SettingsScene}
          options={{ title: 'Settings' }}
        />

        {/* UX/UI */}
        <Screen
          name={RoutesEnum.STORIES_MENU}
          component={StoriesMenuScene}
          options={{ title: 'Playground' }}
        />
        <Screen
          name={RoutesEnum.STORIES_COLORS}
          component={ColorsScene}
          options={{ title: 'Colors' }}
        />
        <Screen
          name={RoutesEnum.STORIES_TYPOGRAPHY}
          component={TypographyScene}
          options={{ title: 'Typography' }}
        />
        <Screen
          name={RoutesEnum.STORIES_UNORDERED}
          component={StoriesScene}
          options={{ title: 'Unordered' }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
