import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC } from 'react';
import { RoutesEnum } from './Routes';
import CronoScene from './components/Scenes/CronoScene';
import EditorEnduranceScene from './components/Scenes/Editor/EnduranceScene';
import EditorStaticScene from './components/Scenes/Editor/StaticScene';
import MouthfillScene from './components/Scenes/MouthfillScene';
import SelectorScene from './components/Scenes/SelectorScene';
import SettingsScene from './components/Scenes/SettingsScene';
import ColorsScene from './components/Scenes/Stories/ColorsScene';
import ElevationsScene from './components/Scenes/Stories/ElevationsScene';
import StoriesMenuScene from './components/Scenes/Stories/MenuScene';
import StoriesScene from './components/Scenes/Stories/StoriesScene';
import TypographyScene from './components/Scenes/Stories/TypographyScene';

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
        <Screen
          name={RoutesEnum.STORIES_ELEVATIONS}
          component={ElevationsScene}
          options={{ title: 'Elevations' }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
