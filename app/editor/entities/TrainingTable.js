
const trainingTableSchema = {

    name: 'TrainingTable',

    primaryKey: 'id',

    properties: {

        id: 'int',

        // type O2,  CO2 or free
        type: 'string',

        // represents hold time or recover time depending of the table type
        base: 'int',

        // total table duration time based on sets
        duration: 'int',

    }
};

export { trainingTableSchema }
