import {GET_LIST, GET_REQUEST_LIST, SET_GOODS, SET_ISPIN, SET_LIST} from "./actions-types";

export const getListAction = (list) => {
    return ({
        type: GET_LIST,
        payload: list
    })
};
export const setListAction = (list) => {
    return ({
        type: SET_LIST,
        payload: list
    })
};
export const getRequestListAction = (list) => {
    return ({
        type: GET_REQUEST_LIST,
        payload: list
    })
};
export const setGoodsAction = (list) => {
    return ({
        type: SET_GOODS,
        payload: list
    })
};
export const setIsPinAction = (list) => {
    return ({
        type: SET_ISPIN,
        payload: list
    })
};
