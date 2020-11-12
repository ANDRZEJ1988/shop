import React, {useCallback} from 'react';
import '../goods/Goods.scss';
import {useDispatch, useSelector} from "react-redux";
import {goodsSelector, isPinSelector, sumSelector} from "../../store/selectors";
import {setGoodsAction, setIsPinAction} from "../../actions/actions";

export const Goods = () => {
    const dispatch = useDispatch();
    const goods = useSelector(goodsSelector);
    const copyGoods = goods.slice();
    const isPin = useSelector(isPinSelector);
    const sum = useSelector(sumSelector);
    const remove = useCallback((id) => {
        const result = copyGoods.filter(value => value.id !== id);
        dispatch(setGoodsAction(result));
    }, [dispatch, copyGoods]);
    const pin = useCallback((product) => {
        const anotherGoods = copyGoods.filter(value => {
            // value.isPin = true;
            return value.id !== product.id
        });
        product.pin = true;
        const result = [product, ...anotherGoods];
        dispatch(setGoodsAction(result));
        dispatch(setIsPinAction(true));
    }, [dispatch, copyGoods]);
    const unpin = useCallback((id) => {
        const result = copyGoods.map(value => {
            if (value.id === id) {
                delete value.pin;
            }
            return value
        });
        dispatch(setIsPinAction(false));
        dispatch(setGoodsAction(result));
    }, [dispatch, copyGoods]);
    const render = () => {
        return (
            goods.map((value, index) => {
                return (
                    <div key={index + 100} className='title'>
                        {value.title} - {value.price * value.amount}{value.currency} - amount - {value.amount} items
                        {!value.pin && <button className='btn' onClick={() => remove(value.id)}>remove</button>}
                        {!isPin && <button className='btn' onClick={() => pin(value)}>pin</button>}
                        {value.pin && <button className='btn' onClick={() => unpin(value.id)}>unpin</button>}
                    </div>
                )
            })
        )
    };
    return (
        <div className='goods'>
            <div className='myGoods'>
                {goods.length !== 0 ? render() : "There aren't any selected products"}
            </div>
            <div className='sum'>{goods.length !== 0 ? `Total sum - ${sum}$` : ''}</div>
        </div>
    );
}

