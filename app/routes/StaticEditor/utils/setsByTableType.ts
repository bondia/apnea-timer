import { SetTypeEnum, TableTypeEnum } from '../../../modules/editor/enums';
import { ImmutableJSTableSetType, ImmutableJSTableSetListType } from '../../../modules/editor/editorTypes';
import { ImmutableJSType } from '../../../redux/types';

const setsByTableType = (editor: ImmutableJSType, tableType: TableTypeEnum): ImmutableJSTableSetListType =>
  editor.getIn(['sets']).filter((set: ImmutableJSTableSetType) => {
    const setType = set.get('type');
    let isValid = false;
    isValid = (tableType === TableTypeEnum.TABLE_TYPE_CO2 && setType === SetTypeEnum.SET_TYPE_PREPARE) || isValid;
    isValid = (tableType === TableTypeEnum.TABLE_TYPE_O2 && setType === SetTypeEnum.SET_TYPE_HOLD) || isValid;
    isValid = tableType === TableTypeEnum.TABLE_TYPE_FREE || isValid;
    return isValid;
  });

export default setsByTableType;
