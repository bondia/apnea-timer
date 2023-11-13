import { SetTypeEnum, TableTypeEnum } from '../../enums';
import { EditorStateType, TableSetType, TableSetListType } from '../../editorTypes';

const setsByTableType = (editor: EditorStateType, tableType: TableTypeEnum): TableSetListType =>
  editor.sets?.filter((set: TableSetType) => {
    const setType = set.type;
    let isValid = false;
    isValid = (tableType === TableTypeEnum.TABLE_TYPE_CO2 && setType === SetTypeEnum.SET_TYPE_PREPARE) || isValid;
    isValid = (tableType === TableTypeEnum.TABLE_TYPE_O2 && setType === SetTypeEnum.SET_TYPE_HOLD) || isValid;
    isValid = tableType === TableTypeEnum.TABLE_TYPE_FREE || isValid;
    return isValid;
  }) || [];

export default setsByTableType;
