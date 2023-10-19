import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EditorStateType } from '../editor/redux/editorTypes';

export enum Routes {
  MENU = 'MENU',
  CREATE_TABLE_SCENE = 'CREATE_TABLE_SCENE',
  ENDURANCE_TABLE_SCENE = 'ENDURANCE_TABLE_SCENE',
  CRONO_SCENE = 'CRONO_SCENE',
  MF_DEPTH = 'MF_DEPTH',
}

export type RootStackParamList = {
  [Routes.MENU]: undefined;
  [Routes.CREATE_TABLE_SCENE]: undefined;
  [Routes.ENDURANCE_TABLE_SCENE]: undefined;
  [Routes.CRONO_SCENE]: { initialData: EditorStateType };
};

export type AppScreenType<GenericRoute extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  GenericRoute
>;
