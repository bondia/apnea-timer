import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import CronoScene from './crono/components/CronoScene';
import EditorEnduranceScene from './editor-endurance/components/EditorEnduranceScene';
import EditorStaticScene from './editor-static/components/EditorStaticScene';
import MainScene from './main/components/MainScene';
import { Routes } from './main/types/Routes';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRouter: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routes.MENU}>
        <Screen
          name={Routes.MENU}
          component={MainScene}
          options={{ title: 'Apnea' }}
        />

        <Screen
          name={Routes.CREATE_TABLE_SCENE}
          component={EditorStaticScene}
          options={{ title: 'CO2/O2' }}
        />

        <Screen
          name={Routes.ENDURANCE_TABLE_SCENE}
          component={EditorEnduranceScene}
          options={{ title: 'Endurance' }}
        />

        <Screen
          name={Routes.SCHEDULE_SCENE}
          component={EditorEnduranceScene}
          options={{ title: 'Schedule' }}
        />

        <Screen
          name={Routes.CRONO_SCENE}
          component={CronoScene}
          options={{ title: 'Crono', headerShown: false }}
          //   type={ActionConst.REPLACE}
          //   hideNavBar
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
