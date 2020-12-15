import * as actionTypes from "./actionTypes";

const addBill = (bill) => ({
    type: actionTypes.ADD_BILL,
    payload: bill
})
const removeBill = (id) => ({
    type: actionTypes.REMOVE_BILL,
    id
})

export { addBill, removeBill }