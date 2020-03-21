import React from 'react'
import Head from 'next/head'
import { Layout, Row, Col, Icon } from 'antd'
import TopNavLinks from '../components/topNavLinks'
import Container from '../components/container'

const { Header, Footer, Content } = Layout

interface CenterLayoutProps {
  title: string
  topLeftText: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

const defaultFooter: React.ReactNode = (
  <Row justify="space-around" type="flex" className="gray-400
  ">
    <Col md={8} xs={20} style={{height: '40px', display: 'flex'}}>
      <div style={{ margin: 'auto 0px' }}>
        &copy; 2020 Project Marius
      </div>
    </Col>
    <Col md={8} xs={20}>
      <div style={{ margin: 'auto', height: '40px', display: 'flex', justifyContent: 'flex-end' }}>
        <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="facebook" />
        <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="instagram" />
        <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="google" />
      </div>
    </Col>
  </Row>
)

const CenterLayout = ({ title, topLeftText, children, footer, className }: CenterLayoutProps) => {
  const defaultHeader: React.ReactNode = <TopNavLinks title={topLeftText}/>
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Header>{defaultHeader}</Header>
        <Content>
          <Container className='flex flex-col justify-center h-screen'>
            {children}
          </Container>
        </Content>
        <Footer>{footer ? footer : defaultFooter}</Footer>
      </Layout>
    </div>
  )
}

export default CenterLayout