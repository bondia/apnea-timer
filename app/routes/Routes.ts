import { EditorStateType } from '../editor/redux/editorTypes';

export enum Routes {
  MENU = 'MENU',
  CREATE_TABLE_SCENE = 'CREATE_TABLE_SCENE',
  CRONO_SCENE = 'CRONO_SCENE',
  MY_TABLES_SCENE = 'MY_TABLES_SCENE',
  HISTORY_SCENE = 'HISTORY_SCENE',
  ENDURANCE_TABLE_SCENE = 'ENDURANCE_TABLE_SCENE',
  SCHEDULE_SCENE = 'SCHEDULE_SCENE',
}

export type RootStackParamList = {
  [Routes.MENU]: undefined;
  [Routes.CREATE_TABLE_SCENE]: undefined;
  [Routes.ENDURANCE_TABLE_SCENE]: undefined;
  [Routes.SCHEDULE_SCENE]: undefined;
  [Routes.CRONO_SCENE]: { initialData: EditorStateType };
};
