import React from "react";
import {Form, Input, Button} from 'antd';
import axios from 'axios';
import { api } from './common/http-common';
import { Buffer } from 'buffer'

const { TextArea } = Input;

const NewArticle = () => {
  const username = "bob"
  const password = "password"
  // const [token, setToken] = React.useState(null);
  // React.useEffect(() => {
    localStorage.setItem("atoken", Buffer.from(`${username}:${password}`, "utf-8").toString("base64")
    );
  // }, [token]);
  
  const contentRules = [
    {
      required:true,
      message: "Please input somethings"
    }
  ]
  
  const handleFormSubmit = (values: any) =>{

    const t = values.title;
    const context = values.context;
    console.log(values, t, context);
    const postArticle = {
      title: t,
      allText: context,
      authorID: 1
    }
    // Post request
    // const access_token = Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');

    axios.post(`${api.url}/articles`, postArticle, {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('atoken')}`
      }
    }).then((res)=>{
      console.log(res.data)
    })
  }
  return (
    <Form onFinish={(values) => handleFormSubmit(values)}>
      <Form.Item name="title" label="Title" rules={contentRules}>
        <Input />
      </Form.Item>
      <Form.Item name="context" label="Context" rules={contentRules}>
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
  </Form>)
}
export default NewArticle;