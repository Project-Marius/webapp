import React, { useState } from 'react'
import { Row, Col } from 'antd'
import NormaLoginForm from '../components/normalLoginForm'
import CenterLayout from '../layouts/centerLayout'

const Auth = () => {
  return (
    <CenterLayout title="Login/Signup -QBHQ" topLeftText="Login/Signup">
      <Row type="flex" justify="center">
        <Col><NormaLoginForm/></Col>
      </Row>
    </CenterLayout>
  )
}

export default Auth