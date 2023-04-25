import React from 'react';
import { Card, Button, DatePicker, Col, Row} from 'antd';
import 'antd/dist/reset.css';
import DetailArticle from './components/DetailArticles'
// import Hello from './components/Hello';
// import Goodbye from './components/Goodbye';
// import CardColumn from './components/Card'

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About'
import NewArticle from './components/NewArticle'
import {Layout, Space} from 'antd';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
const {Header, Content, Footer} = Layout;
import 'antd/dist/reset.css'
// let counter = 0;

// const onChange: DatePickerProps['onChange']=(date, datestring) => {
//   console.log(date, datestring)
// }

// const onClick = (event: any) => {
//   console.log(counter++)
// }
export default function App() {
    return (
    <Router>
      <Layout>
      <Header>
        <Row>
          <Col span={18} >
            <nav>
              <Space>
                <Link to="/"> Home </Link>
                <Link to="/dashboard"> Dashboard </Link>
                <Link to="/about"> About </Link>
                <Link to="/newarticle"> NewArticle </Link>
              </Space>
          </nav>
        </Col>
        <Col span={6}>
          <nav>
              <Space>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </Space>
          </nav>
        </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', minHeight: 600 }}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/a/:id" element={<DetailArticle />} />
              <Route path="/newarticle" element={<NewArticle />} />
          </Routes>
        </Layout>
      </Content>
      <Footer style={{ padding: '0 0 0 10px' }}>
        <p>VT6003CEM Demo</p>
      </Footer>
      </Layout>
    </Router>
  );
}