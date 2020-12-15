import { useRef } from "react";
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const AddBill = () => {
    const formRef = useRef(null);
    return (
        <Form {...layout} ref={formRef} onFinish={this.onFinish}>
            <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        </Form>
    )
}

export default AddBill;