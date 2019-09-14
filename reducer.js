let awesomeReducerInitialState = {
    isThisAwesome: true,
    gotPunched: false,
    gotKicked: false
};

let awesomeReducerActions = {
    "PUNCH_ACTION": {
        ...state,
        gotPunched: true
    },
    "KICK_ACTION": {
        ...state,
        gotKicked: true
    }
};

let awesomeReducerState = (state = awesomeReducerInitialState, action) => (
    awesomeReducerActions[action.type] || state
);

export default awesomeReducerState;
