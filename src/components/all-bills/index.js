import { useState, useEffect } from "react";
import { Card, Button, Select, Form } from "antd";
const { Option } = Select;


const AllBills = ({ allBills, deleteBill }) => {
  const [bills, setBills] = useState(allBills);

  useEffect(() => {
    setBills(allBills)
  }, [allBills])

  if (!allBills.length) {
    return <h3>No bills added!</h3>;
  }

  return (
    <div>
      <Form.Item
          name="category"
          label="Category"
        >
          <Select
            placeholder="Select category"
            onChange={val => {
              if(val){

                const filteredBills = allBills.filter(bill => bill.category === val);
                setBills(filteredBills);
              } else {
                setBills(allBills);
              }
            }}
            allowClear
            
          >
            {allBills.map((bill, idx) => <Option key={idx} value={bill.category}>{bill.category}</Option>)}
          </Select>
        </Form.Item>
      {bills.map((bill) => (
        <>
          <Card color="blue">
            Description - {bill.description} <br />
            Amount - {bill.amount}
            <br />
            Date - {bill.date}
            <br />
            Category - {bill.category}
            <br /><br />
            <Button color="primary" onClick={() => deleteBill(bill.id)}>delete</Button>
            <br />
          </Card>
          <br />
        </>
      ))}
    </div>
  );
};

export default AllBills;
