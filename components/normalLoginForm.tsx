import React from 'react'
import Link from 'next/link'
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd'

const tabList = [
  {
    key: 'login',
    tab: 'login',
  },
  {
    key: 'signup',
    tab: 'signup',
  },
]

const loginForm = (getFieldDecorator: Function, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void) => (
  <>
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'required' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="email"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'required' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
    <div className="flex flex-col">
      <Link href="/"><span><a>Forgot password?</a></span></Link>
    </div>
  </>
)

const singupForm = (getFieldDecorator: Function, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void) => (
  <>
    <Form onSubmit={handleSubmit} className="signup-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'required' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="email"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'required' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  </>
)

const formList = {
  login: loginForm,
  signup: singupForm
}

interface NormalLoginFormState {
  key: 'login' | 'signup'
}

// trust antd knows what type of props are
class NormalLoginForm extends React.Component<any, {}> {
  state: NormalLoginFormState = {
    key: 'login'
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  onTabChange = (key: string): void => {
    this.setState({ 'key': key })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Card tabList={tabList} activeTabKey={this.state.key} onTabChange={this.onTabChange}>
        {formList[this.state.key](getFieldDecorator, this.handleSubmit)}
      </Card>
    )
  }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);