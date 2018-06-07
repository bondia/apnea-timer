import reduxActions from 'app/main/enums/reduxActions';

function cronoReducer(state = null, action) {
    // set initial state
    if (action.type == reduxActions.CRONO_SET_INITIAL_STATE) {
        return action.state;
    }

    // set crono mode [ auto, coach ]
    if (action.type == reduxActions.CRONO_SET_MODE) {
        return state.setIn(['trainingTable', 'running', 'mode'], action.mode);
    }

    // set duration
    if (action.type == reduxActions.CRONO_SET_TABLE_DURATION) {
        return state.setIn(['trainingTable', 'running', 'countdown'], action.duration);
    }

    // set set
    if (action.type == reduxActions.CRONO_REPLACE_SET) {
        const pos = action.set.get('pos');
        return state.updateIn(['sets'], sets => sets.map(s => (s.get('pos') === pos ? action.set : s)));
    }

    // set sets
    if (action.type == reduxActions.CRONO_REPLACE_SETS) {
        return state.setIn(['sets'], action.sets);
    }

    return state;
}

export default cronoReducer;
