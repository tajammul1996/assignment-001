import { useRef, useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 8
    }
}

const AddBill = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({});

  return (
    <Form {...layout} ref={formRef}>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={e => setFormData({...formData, description: e.target.value})}/>
      </Form.Item>
      <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select category"
            onChange={val => setFormData({...formData, category: val})}
            allowClear
            
          >
            <Option value="food">food and dining</Option>
            <Option value="utility">utility</Option>
            <Option value="shopping">shopping</Option>
            <Option value="education">education</Option>
            <Option value="travel">travel</Option>
            <Option value="personal">personal care</Option>
            <Option value="rent">rent</Option>
          </Select>
        </Form.Item>
      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={e => setFormData({...formData, amount: e.target.value})}/>
      </Form.Item>
      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker format={"YYYY/MM/DD"} onChange={(date, dateString) => setFormData({...formData, date: dateString})}/>
      </Form.Item>
      <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={() => console.log(formData)}>
            Submit
          </Button>
        </Form.Item>
    </Form>
  );
};

export default AddBill;
