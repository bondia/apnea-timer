import { TableTypeEnum } from '../../enums';

const titleByType = {
  [TableTypeEnum.TABLE_TYPE_CO2]: 'Breath Hold',
  [TableTypeEnum.TABLE_TYPE_O2]: 'Breath Up',
  [TableTypeEnum.TABLE_TYPE_FREE]: 'Sets',
};

const headlineByTableType = (tableType: TableTypeEnum): string =>
  titleByType[tableType] || '';

export default headlineByTableType;
