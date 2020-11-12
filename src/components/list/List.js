import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getListAction, getRequestListAction, setGoodsAction, setListAction} from "../../actions/actions";
import './List.scss';
import {goodsSelector, listSelector, requestListSelector} from "../../store/selectors";
import Shop from '../../icons/shopping-cart.png';

export const List = () => {
    const dispatch = useDispatch();
    const requestList = useSelector(requestListSelector);
    const goods = useSelector(goodsSelector);
    const copyGoods = goods.slice();
    const list = useSelector(listSelector);
    const copyList = list.slice();
    const getList = useCallback(async () => {
            try {
                const request = await fetch("https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=lenovo&category=computers&country=US", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "7b4376c68amsh086f378303b1b42p1e0433jsn512f378a4d94",
                        "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com"
                    }
                });
                const answer = await request.json();
                const {products} = answer;
                const result = products.map(value => {
                    const {price: {current_price, currency}, title, thumbnail, asin: id} = value;
                    const string = title.split(' ');
                    const [first, second, third, ...arrayDescription] = string;
                    const description = arrayDescription.join(' ');
                    const titl = [first, second, third].join(' ');
                    return ({
                        id: id,
                        price: current_price,
                        currency: currency,
                        title: titl,
                        description: description,
                        url: thumbnail
                    });
                });
                dispatch(getListAction(result));
                dispatch(getRequestListAction(result));

            } catch (e) {
                console.log(e);
            }
        }, [dispatch]
    );
    const putInBasket = useCallback((product) => {
        const find = copyGoods.find(value => value.id === product.id);
        if (find === undefined) {
            product.amount = 1;
            copyGoods.push(product);
            dispatch(setGoodsAction(copyGoods));
        } else {
            find.amount += 1;
            dispatch(setGoodsAction(copyGoods));
        }
    }, [copyGoods, dispatch]);
    const inpRef = useRef();
    const search = useCallback(() => {
        const searchProduct = inpRef.current.value;
        if (searchProduct.length === 0) {
            dispatch(setListAction(requestList));
        } else {
            const result = copyList.filter(value => value.title.toLowerCase().includes(searchProduct)
                || value.description.toLowerCase().includes(searchProduct)
            );
            dispatch(setListAction(result));
        }
    }, [dispatch, copyList, requestList]);

    useEffect(() => {
        getList();
    }, [getList])
    return (
        <div className='main'>
            <div className='inp'>
                <input type="text" className='searchProduct' placeholder='Search product' onInput={search}
                       ref={inpRef}/>
            </div>
            <div className='list'>{
                list.map((value, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className='forimg'>
                                <img className="img" src={value.url}
                                     alt="product"/>
                            </div>
                            <div className='forbtn'>
                                <img src={Shop} alt="basket" onClick={() => putInBasket(value)}/>
                            </div>
                            <div className="name">
                                <h4>{value.title}</h4>
                                <div className="info">Price - {value.price} {value.currency}</div>
                                <div className='description'>{value.description}</div>
                            </div>

                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

