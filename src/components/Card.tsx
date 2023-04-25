import { Card, Col, Row } from 'antd';
import React from 'react';

const CardColumn: React.FC = () => (
  
  <Row gutter={16} type="flex" justify="space-around" style={{ backgroundColor: '#f5f5f5' }}>
    <Col span={8}>
      <Card title="Card title" bordered={false}
        hoverable
    style={{ width: 240 }, {marginTop: '20px', marginBottom: '20px'} }
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >>
        
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}
           hoverable
    style={{ width: 240 }, {marginTop: '20px', marginBottom: '20px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}
           hoverable
    style={{ width: 240 }, {marginTop: '20px', marginBottom: '20px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >>
        Card content
      </Card>
    </Col>
  </Row>
);

export default CardColumn;