import React from 'react'
//import './route.js'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import logo from '../../logo.svg'
import SideNav, {
  Toggle,
  //Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'
import { AiTwotoneHome, AiTwotoneSetting } from 'react-icons/ai'
import { BiTransferAlt, BiSupport } from 'react-icons/bi'
import { IoWalletSharp } from 'react-icons/io5'
import { MdPayment } from 'react-icons/md'
import { RiLayout3Fill } from 'react-icons/ri'
import Dashboard from '../components/Dashboard'
import './index.css'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

function Home() {
  //check if user is logged in and route to /login
  console.log('routing...')

  return (
    <React.Fragment>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
          console.log(selected)
        }}
        className='fixed1'
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
          <NavItem eventKey='home'>
            <NavIcon>
              <AiTwotoneHome size={30} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey='transfer'>
            <NavIcon>
              <BiTransferAlt size={30} />
            </NavIcon>
            <NavText>Transfer</NavText>
          </NavItem>
          <NavItem eventKey='accounts'>
            <NavIcon>
              <IoWalletSharp size={30} />
            </NavIcon>
            <NavText>Accounts</NavText>
          </NavItem>
          <NavItem eventKey='payments'>
            <NavIcon>
              <MdPayment size={30} />
            </NavIcon>
            <NavText>Payments</NavText>
          </NavItem>
          <NavItem eventKey='support'>
            <NavIcon>
              <BiSupport size={30} />
            </NavIcon>
            <NavText>Support</NavText>
          </NavItem>
          <NavItem eventKey='customize'>
            <NavIcon>
              <RiLayout3Fill size={30} />
            </NavIcon>
            <NavText>Customize Dashboard</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <div className='Container'>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Harish Bank
          </Navbar.Brand>
        </Navbar>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Navbar
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-light'>Search</Button>
            <Nav.Link href='/login'>Logout</Nav.Link>
          </Form>
        </Navbar>
        <Dashboard />
      </div>
    </React.Fragment>
  )

  /*if (1 && !Cookies('user_id') === undefined) {
    return <Redirect to='/login' />
  } else*/

  /* 
<Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Harish Bank
        </Navbar.Brand>
      </Navbar>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Navbar
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-light'>Search</Button>
          <Nav.Link href='/login'>Logout</Nav.Link>
        </Form>
      </Navbar>
  */
}

export default Home
