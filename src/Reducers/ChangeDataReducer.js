const initState = [];

function ChangeDataReducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_USER_TYPE':
            action.payload.forEach(data => {
                if (data.id == action.userSelected) {
                    data.userType= action.userVal

                }
            }
            );
            return action.payload;
        default:
            return state;
    }
}


export default ChangeDataReducer;