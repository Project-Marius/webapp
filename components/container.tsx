import { Row, Col } from 'antd'
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode
}

export default ({ children }: ContainerProps) => (
  <Row justify='space-around' type='flex'>
    <Col span={20} xs={24}>
      {children}
    </Col>
  </Row>
)