import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    allBills: []
}

const billReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_BILL: 
            return {...state, allBills: [...state.allBills, action.payload]}

        case actionTypes.REMOVE_BILL:
            const filteredBills = state.allBills.filter(bill => bill.id !== action.id)
            return {...state, allBills: filteredBills}

        default:
            return state;
    }
}

export default billReducer;