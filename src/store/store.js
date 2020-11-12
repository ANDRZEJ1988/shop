import {createStore} from "redux";


const initialState = {
    requestList: [],
    list: [],
    goods: [],
    isPin: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return {...state, list: action.payload};
        case 'SET_LIST':
            return {...state, list: action.payload};
        case 'GET_REQUEST_LIST':
            return {...state, requestList: action.payload};
        case 'SET_GOODS':
            return {...state, goods: action.payload};
        case 'SET_ISPIN':
            return {...state, isPin: action.payload};
        default:
            return state;
    }

};
export const store = createStore(reducer);