import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { deactivateKeepAwake } from 'expo-keep-awake';
import React, { FC } from 'react';
import CronoScene from './crono/components/CronoScene';
import MainScene from './routes/Main/MainScene';
import MouthfillScene from './routes/Mouthfill/MouthfillScene';
import { Routes } from './routes/Routes';
import EditorStaticScene from './routes/StaticEditor/StaticEditorScene';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRouter: FC = () => {
  deactivateKeepAwake();
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routes.MENU} screenOptions={{ headerShown: false }}>
        {/* MAIN */}
        <Screen name={Routes.MENU} component={MainScene} options={{ title: 'Apnea' }} />
        {/* TABLES */}
        <Screen name={Routes.CREATE_TABLE_SCENE} component={EditorStaticScene} options={{ title: 'CO2/O2' }} />
        <Screen name={Routes.CRONO_SCENE} component={CronoScene} options={{ title: 'Crono', headerShown: false }} />
        {/* UTILS */}
        <Screen name={Routes.MF_DEPTH} component={MouthfillScene} options={{ title: 'MF DEPTH' }} />

        {/* <Screen name={Routes.ENDURANCE_TABLE_SCENE} component={EditorEnduranceScene} options={{ title: 'Endurance' }} /> */}
        {/* <Screen name={Routes.SCHEDULE_SCENE} component={EditorEnduranceScene} options={{ title: 'Schedule' }} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
