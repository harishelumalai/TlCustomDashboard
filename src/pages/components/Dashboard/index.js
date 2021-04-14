import React, { useState, useEffect } from 'react'
import CurrentMonthExpenses from '../CurrentMonthExpenses'
import RecentServices from '../RecentServices'
import RecentTransactions from '../RecentTransactions'
import ComponentsList from '../components_list'
import LoadingShimmer from '../LoadingShimmer'

function Dashboard() {
  process.env.DOMAIN = 'http://localhost:80/mysite/TRUELAYERAUTH/'
  const [widgetList, setWidgetList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getWidgetList()
  }, [])

  const getWidgetList = async () => {
    let uri = process.env.MYDOMAIN
    //let uri = 'http://localhost:80/mysite/TRUELAYERAUTH/'
    uri += 'get_widgets.php'
    setLoading(true)
    const response = await fetch(uri)
    const data = await response.json()
    console.log(data)
    setWidgetList(data)
    setLoading(false)
  }

  const generateComponent = (widget) => {
    //return React.Component(widget.component)
    console.log(widget.component)
    console.log(typeof widget.component)

    console.log(ComponentsList[widget.component])
    if (typeof ComponentsList[widget.component] !== 'undefined')
      return React.createElement(ComponentsList[widget.component], {
        key: widget.id,
      })
  }

  if (loading) {
    return <LoadingShimmer />
  } else
    return (
      <div className='dashboard-container'>
        {widgetList.map(generateComponent)}
      </div>
    )
}

export default Dashboard
