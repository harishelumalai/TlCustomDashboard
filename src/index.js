import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import LoginPage from './pages/loginpage'
import HomePage from './pages/homepage'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CurrentMonthExpenses from './pages/components/CurrentMonthExpenses'
import RecentServices from './pages/components/RecentServices'
import RecentTransactions from './pages/components/RecentTransactions'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/login' component={LoginPage} />
        <Route path='/home' component={HomePage} />
        <Route path='/cme' component={CurrentMonthExpenses} />
        <Route path='/rs' component={RecentServices} />
        <Route path='/rt' component={RecentTransactions} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
