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
  const data = [
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 1,
            "teamName": "Arsenal"
        },
        "team2": {
            "id": 2,
            "teamName": "Liverpool"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 3,
            "teamName": "Chelsea"
        },
        "team2": {
            "id": 4,
            "teamName": "Newcatsle United"
        },
        "isDerby": false
    },
    {
        "id": null,
        "team1": {
            "id": 5,
            "teamName": "Manchester United"
        },
        "team2": {
            "id": 6,
            "teamName": "Manchester City"
        },
        "isDerby": false
    }
]
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
        const dataSource = data
        console.log(data)
        setDataSource(dataSource);
        form.resetFields();
      })
      .catch((err) => {console.log(err)
        console.log(data)
        const dataSource = data;
        setDataSource(dataSource);
        form.resetFields();
});
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
          {/* {Array.from({ length: 6 }).map((_, index) => (
            <Form.Item
              label={`Name ${index + 1}`}
              name={`name_${index}`}
              key={index}
            >
              <Input />
            </Form.Item>
          ))} */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Process
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
      title: 'Team 1',
      dataIndex: 'team2.teamName',
      key: 'team1.teamName',
      render: (_, record) => {
        return record.team1.teamName;
      },
    },
    {
      title: 'Team 2',
      dataIndex: 'team2.teamName',
      key: 'team2.teamName',
      render: (_, record) => {
        return record.team2.teamName;
      },

    },
    {
      title: 'Derby Match',
      dataIndex: 'isDerby',
      key: 'isDerby',
      render : (text) => String(text),
    },
  ];

  return <Table dataSource={props.dataSource} 
  columns={columns} 
  pagination={false}
  rowClassName={(_r, i) => (i % 6 <3 ? 'active-row' : '')}
  />;
};
