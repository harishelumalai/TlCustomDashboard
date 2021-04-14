import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
const loginstate_init = { email: '', password: '', logging_in: false }
const center = { margin: '0 auto' }

function LoginPage() {
  const [loginState, setLoginState] = useState(loginstate_init)
  var login_uri = 'http://localhost:80/mysite/TRUELAYERAUTH/login.php'

  const AuthorizeLogin = async () => {
    let h = useHistory()
    setLoginState({ ...loginState, logging_in: true })
    const server_response = await fetch(login_uri)
    const response = await server_response.json()
    console.log(response)
    alert(response)
    if (response.status_code === 200) {
      Cookies.set('user_id', response.user_id)

      h.push('/home')
    }
    setLoginState({ ...loginState, logging_in: false })
  }

  const LoginClicked = () => {
    console.log('Login Clicked')
    /*let email = document.getElementById('LoginEmail').innerText
    let password = document.getElementById('LoginPassword').innerText
    login_uri += '?email='
    login_uri += encodeURI(email)
    login_uri += '&password='
    login_uri += password*/
    AuthorizeLogin()
  }

  if (loginState.logging_in) {
    return (
      <div className='CenterContainer LoginBG'>
        <div className='LoginCard Card'>
          <h1 style={center}>Logging In</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div className='CenterContainer LoginBG'>
        <div className='LoginCard Card'>
          <h1 style={center}>Login</h1>
          <Form>
            <Form.Group controlId='LoginEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='LoginPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              onClick={() => LoginClicked()}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default LoginPage
