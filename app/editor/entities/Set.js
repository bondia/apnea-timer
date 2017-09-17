
const trainingTableSchema = {

    name: 'Set',

    primaryKey: 'id',

    properties: {

        id: 'int',

        // HOLD or PREPARE
        type: 'string',

        // position
        pos: 'int',

        // set duration
        duration: 'int',

    }
};

export { trainingTableSchema }
