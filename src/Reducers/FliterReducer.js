const iniState = [];

export default function FilterReducer(state = iniState, action) {
    switch (action.type) {
        case 'GET_USER_TYPES':
            const filtered =action.payload.filter(x => x.userType === action.userVal);
            return filtered;

        default:
            return state;
    }
}