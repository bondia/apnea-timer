import { TableTypeEnum } from '../../../editor/enums';

const headlineByTableType = (tableType: TableTypeEnum): string => {
  switch (tableType) {
    case TableTypeEnum.TABLE_TYPE_CO2:
      return 'Breath Up';
    case TableTypeEnum.TABLE_TYPE_O2:
      return 'Breath Hold';
    case TableTypeEnum.TABLE_TYPE_FREE:
      return 'Sets';
    default:
      return '';
  }
};

export default headlineByTableType;
