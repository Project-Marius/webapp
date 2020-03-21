import { Row, Col } from 'antd'
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default ({ children, className }: ContainerProps) => (
  <Row justify='space-around' type='flex'>
    <Col span={20} xs={24} className={className ? className : ''}>
      {children}
    </Col>
  </Row>
)