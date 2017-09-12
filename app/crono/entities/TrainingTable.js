
const trainingTableSchema = {

    name: 'TrainingTable',

    primaryKey: 'id',

    properties: {

        id: 'int',

        // Table type O2 or CO2
        type: 'string',

        // base: represents hold time or recover time depending of the type of table
        base: 'int',

        // total table duration time based on sets calculation
        duration: 'int',

    }
};

export { trainingTableSchema }
