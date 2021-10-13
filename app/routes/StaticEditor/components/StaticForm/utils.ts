import { COLOR_GREEN_NORMAL, COLOR_RED_NORMAL } from '../../../../common/styles/commonStyles';
import { TableType } from '../../../../editor/enums';

export const decideTitle = (type: TableType) => {
  if (TableType.TABLE_TYPE_CO2 === type) {
    return 'Breath Hold';
  }
  if (TableType.TABLE_TYPE_O2 === type) {
    return 'Breath Up';
  }
  return '';
};

export const decideColor = (type: TableType) => {
  if (TableType.TABLE_TYPE_CO2 === type) {
    return COLOR_RED_NORMAL;
  }
  if (TableType.TABLE_TYPE_O2 === type) {
    return COLOR_GREEN_NORMAL;
  }
  return '';
};
