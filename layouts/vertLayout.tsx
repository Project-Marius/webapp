import React from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import TopNav from '../components/topNav'

const { Header, Footer, Content } = Layout

const VertLayout = (props) =>  {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Header><TopNav/></Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default VertLayout