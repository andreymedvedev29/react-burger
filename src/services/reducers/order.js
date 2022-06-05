import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAILED, 
    CLEAR_ORDER_NUMBER,
    } from '../actions/order';
    
    const initialState = {
        orderRequested: false,
        orderFailed: false,
        orderNumber: undefined,
    };
    
    export const orderReducer = (state = initialState, action) => {
        switch (action.type) {
            case ORDER_REQUEST:
                return {
                    ...state,
                    orderRequested: true,
                    orderFailed: false,
                };
    
            case ORDER_SUCCESS:
                return {
                    ...state,
                    orderNumber: action.orderNumber,
                    orderRequested: false,
                    orderFailed: false,
                }; 
            
            case ORDER_FAILED:
                return {
                    ...initialState,
                    orderFailed: true,
                }; 
            
             case CLEAR_ORDER_NUMBER:
                return {
                    ...state,
                    orderNumber: null,
                }; 
            
            default:
                return state;    
        }
    };
    