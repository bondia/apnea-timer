import { SetType, TableType } from '../../../editor/enums';
import { ImmutableJSEditorSetType, ImmutableJSType } from '../../../editor/redux/editorTypes';

const setsByTableType = (editor: ImmutableJSType, tableType: TableType): ImmutableJSEditorSetType[] =>
  editor.getIn(['sets']).filter((set: ImmutableJSEditorSetType) => {
    const setType = set.get('type');
    let isValid = false;
    isValid = (tableType === TableType.TABLE_TYPE_CO2 && setType === SetType.SET_TYPE_PREPARE) || isValid;
    isValid = (tableType === TableType.TABLE_TYPE_O2 && setType === SetType.SET_TYPE_HOLD) || isValid;
    isValid = tableType === TableType.TABLE_TYPE_FREE || isValid;
    return isValid;
  });

export default setsByTableType;
