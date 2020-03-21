import React from 'react'
import Link from 'next/link'
import { Row, Col, Icon } from 'antd'
import Container from './container'

interface TopNavLinksProps {
  title: string
}

const TopNavLinks = ({ title }: TopNavLinksProps) => {
  return (
    <Container>
      <Row justify="space-between" type="flex" className="h-auto">
        <div className="flex text-left">
          <Link href="/">
            <a>{title}</a>
          </Link>
        </div>
        <div className="flex flex-row justify-start text-right">
          <Link href="/">
            <a className="px-4">
              Events
            </a>
          </Link>
          <Link href="/">
            <a className="px-4">
              Stats
            </a>
          </Link>
          <Link href="/">
            <a className="px-4">
              Learn
            </a>
          </Link>
          <Link href="/auth">
            <a className="px-4"><Icon type="user" />Login/Signup</a>
          </Link>
        </div>
      </Row>
    </Container>
  )
}

export default TopNavLinks