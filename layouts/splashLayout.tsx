import React from 'react'
import Head from 'next/head'
import TopNav from '../components/topNav'
import { makeStyles } from '@material-ui/core/styles'

const VertLayout = (props: LayoutProps) =>  {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopNav/>
      {props.children}
    </>
  )
}

export default VertLayout