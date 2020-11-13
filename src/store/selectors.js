import {createSelector} from "reselect";

export const requestListSelector=state=>state.requestList;
export const listSelector=state=>state.list;
export const goodsSelector=state=>state.goods;
export const isPinSelector=state=>state.isPin;
export const sumSelector=createSelector(
    goodsSelector,
    (goods)=>goods.reduce((previousValue, currentValue) => {return previousValue+(currentValue.price*currentValue.amount)},0));