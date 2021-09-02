const initState = [];

function GetDataReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_DATA':
            action.payload.data.forEach(element => {
                element.userType = 'Admin'
            });
            return action.payload.data;
        default:
            return state;
    }
}

export default GetDataReducer
