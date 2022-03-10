import { TableType } from '../../../editor/enums';

const headlineByTableType = (tableType: TableType): string => {
  switch (tableType) {
    case TableType.TABLE_TYPE_CO2:
      return 'Breath Up';
    case TableType.TABLE_TYPE_O2:
      return 'Breath Hold';
    case TableType.TABLE_TYPE_FREE:
      return 'Sets';
    default:
      return '';
  }
};

export default headlineByTableType;
