import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CronoSceneParamList } from './modules/crono/CronoScene';

export enum RoutesEnum {
  MENU = 'MENU',
  CREATE_TABLE_SCENE = 'CREATE_TABLE_SCENE',
  ENDURANCE_TABLE_SCENE = 'ENDURANCE_TABLE_SCENE',
  CRONO_SCENE = 'CRONO_SCENE',
  MF_DEPTH = 'MF_DEPTH',
  SETTINGS = 'SETTINGS',
  STORIES_MENU = 'STORIES_MENU',
  STORIES_UNORDERED = 'STORIES_UNORDERED',
  STORIES_COLORS = 'STORIES_COLORS',
  STORIES_TYPOGRAPHY = 'STORIES_TYPOGRAPHY',
}

export type RootStackParamList = {
  [RoutesEnum.MENU]: undefined;
  [RoutesEnum.CREATE_TABLE_SCENE]: undefined;
  [RoutesEnum.ENDURANCE_TABLE_SCENE]: undefined;
  [RoutesEnum.CRONO_SCENE]: CronoSceneParamList;
  [RoutesEnum.MF_DEPTH]: undefined;
  [RoutesEnum.SETTINGS]: undefined;
  [RoutesEnum.STORIES_MENU]: undefined;
  [RoutesEnum.STORIES_UNORDERED]: undefined;
  [RoutesEnum.STORIES_COLORS]: undefined;
  [RoutesEnum.STORIES_TYPOGRAPHY]: undefined;
};

export type AppScreenType<GenericRoute extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, GenericRoute>;
