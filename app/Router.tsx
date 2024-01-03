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
import StoriesScene from './modules/stories/StoriesScene';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRouter: FC = () => {
  deactivateKeepAwake();
  return (
    <NavigationContainer>
      <Navigator initialRouteName={RoutesEnum.MENU} screenOptions={{ headerShown: false }}>
        {/* Main */}
        <Screen name={RoutesEnum.MENU} component={SelectorScene} options={{ title: 'Apnea' }} />

        {/* Create tables */}
        <Screen name={RoutesEnum.CREATE_TABLE_SCENE} component={EditorStaticScene} options={{ title: 'CO2/O2' }} />
        <Screen
          name={RoutesEnum.ENDURANCE_TABLE_SCENE}
          component={EditorEnduranceScene}
          options={{ title: 'Endurance' }}
        />

        {/* Crono */}
        <Screen name={RoutesEnum.CRONO_SCENE} component={CronoScene} options={{ title: 'Crono', headerShown: false }} />

        {/* Freediving Utils */}
        <Screen name={RoutesEnum.MF_DEPTH} component={MouthfillScene} options={{ title: 'MF DEPTH' }} />

        {/* User */}
        <Screen name={RoutesEnum.SETTINGS} component={SettingsScene} options={{ title: 'Settings' }} />

        {/* UX/UI */}
        <Screen name={RoutesEnum.STORIES} component={StoriesScene} options={{ title: 'Playground' }} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
