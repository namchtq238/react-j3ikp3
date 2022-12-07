import React, { useState, useEffect } from 'react';
import './style.css';
import { Form } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Space, Table, Tag } from 'antd';

export default function App() {
  return (
    <div>
      <FormCustom />
    </div>
  );
}

const FormCustom = () => {
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const names = Object.values(values).map((x) => x);
    console.log('Success:', JSON.stringify(names));

    fetch('localhost:8090/abc', {
      body: JSON.stringify(names),
      method: 'POST',
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        const dataSource = [
          {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
        ];
        setDataSource(dataSource);
        form.resetFields();
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Form.Item
              label={`Name ${index + 1}`}
              name={`name_${index}`}
              key={index}
            >
              <Input />
            </Form.Item>
          ))}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      
      <TableCustom dataSource={dataSource} />
    </>
  );
};

const TableCustom = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => {
        return record.name;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table dataSource={props.dataSource} columns={columns} />;
};
