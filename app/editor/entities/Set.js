const trainingTableSchema = {
    name: 'Set',

    primaryKey: 'id',

    properties: {
        id: 'int',

        // HOLD or PREPARE
        type: 'string',

        // Set is disabled. Normally when 0
        zombie: false,

        // position
        pos: 'int',

        // set duration
        duration: 'int'
    }
};

export { trainingTableSchema };
