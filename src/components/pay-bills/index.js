import { useState } from "react";
import { Card, Form, Input } from "antd";

const AllBills = ({ allBills, deleteBill }) => {
  const [bills, setBills] = useState([]);

  if (!allBills.length) {
    return <h3>No bills added!</h3>;
  }

  const calculateMaxBillsToBePaid = (maxBudget = 0) => {
    console.log(maxBudget);
    let maxBudgetBills = [];
    for (let bill of allBills) {
      let billsBudget = maxBudgetBills.reduce(
        (a, c) => a + parseInt(c.amount),
        0
      );
      if (
        bill.amount <= maxBudget &&
        billsBudget < maxBudget &&
        maxBudget - billsBudget >= bill.amount
      ) {
        maxBudgetBills.push(bill);
      }
    }
    setBills(maxBudgetBills);
  };

  return (
    <div>
      <Form.Item name="max-budget" label="Max budget">
        <Input
          onChange={(e) => calculateMaxBillsToBePaid(parseInt(e.target.value))}
        />
      </Form.Item>
      {bills.map((bill) => (
        <>
          <Card color="blue">
            Description - {bill.description} <br />
            Amount - <b>{bill.amount}</b>
            <br />
            Date - {bill.date}
            <br />
            Category - {bill.category}
            <br />
          </Card>
          <br />
        </>
      ))}
    </div>
  );
};

export default AllBills;
