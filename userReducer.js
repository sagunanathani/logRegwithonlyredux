import {Foften, Logier ,Registrations} from "../Actions/allAction";

const initialState = {
    data: [],
};
const userReducer = (state = initialState, action) => {
    console.log("state", state, "action.payload", action.payload);
    switch (action.type) {
        case "LOGIER":
            return {
                data: [...state.data, action.payload]
            };

        case "REGISTRATIONS":
            console.log("action", action);
            return {
                ...state,
                data: [...state.data,action.payload]
            };
        case "FORGOT":
            return {
                ...state,
                data: [...state.data,action.payload]
            };

        default:
            return state;
    }
};
export default userReducer;



