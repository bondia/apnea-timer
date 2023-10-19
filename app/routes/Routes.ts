import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EditorStateType } from '../editor/redux/editorTypes';

export enum RoutesEnum {
  MENU = 'MENU',
  CREATE_TABLE_SCENE = 'CREATE_TABLE_SCENE',
  ENDURANCE_TABLE_SCENE = 'ENDURANCE_TABLE_SCENE',
  CRONO_SCENE = 'CRONO_SCENE',
  MF_DEPTH = 'MF_DEPTH',
}

export type RootStackParamList = {
  [RoutesEnum.MENU]: undefined;
  [RoutesEnum.CREATE_TABLE_SCENE]: undefined;
  [RoutesEnum.ENDURANCE_TABLE_SCENE]: undefined;
  [RoutesEnum.CRONO_SCENE]: { initialData: EditorStateType };
  [RoutesEnum.MF_DEPTH]: undefined;
};

export type AppScreenType<GenericRoute extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  GenericRoute
>;
