import React, { useState, useEffect } from 'react'
/*import * from './canvasjs/canvasjs.min'*/
import CanvasJSReact from './canvasjs/canvasjs.react'
import LoadingShimmer from '../LoadingShimmer'
import './index.css'

const coptions = {
  animationEnabled: true,
  title: {
    text: 'Current Month Expenses',
  },
  subtitles: [
    {
      text: '$324.54 Spent',
      verticalAlign: 'center',
      fontSize: 24,
      dockInsidePlotArea: true,
    },
  ],
  data: [
    {
      type: 'doughnut',
      showInLegend: true,
      indexLabel: '{name}: {y}',
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: 'Tickets', y: 5 },
        { name: 'Food', y: 31 },
        { name: 'Fuel', y: 40 },
        { name: 'Utilities', y: 17 },
        { name: 'ATM', y: 7 },
      ],
    },
  ],
}

function CurrentMonthExpenses() {
  let CanvasJS = CanvasJSReact.CanvasJS
  let CanvasJSChart = CanvasJSReact.CanvasJSChart
  let uri = process.env.MYDOMAIN
  //let uri = 'http://localhost:80/mysite/TRUELAYERAUTH/'
  uri += 'get_month_expenses.php'

  console.log(uri)
  const [options, setOptions] = useState(coptions)
  const [loading, setLoading] = useState(true)

  const processTxns = (txns) => {
    let total = 0
    let subtitle = ''
    for (let txn in txns.results) {
      total += -1 * txn.amount
    }
    //setOptions(...options, options.data.dataPoints = txns)
    subtitle = total + ' spent'
    coptions.data.dataPoints = txns
    //setOptions(...options, options.subtitles.text = subtitle)
    coptions.subtitles.text = total + ' spent'
    console.log(coptions)
    setOptions(coptions)
    return coptions
  }

  const GetTransactions = async () => {
    setLoading(true)
    let response = await fetch(uri)
    let transactions = await response.json()
    console.log('transactions' + transactions)
    processTxns(transactions.dataPoints)
    //setOptions(processTxns(transactions.dataPoints))
    setLoading(false)
  }

  useEffect(() => {
    GetTransactions()
  }, [])

  if (loading) {
    return <LoadingShimmer />
  } else
    return (
      <div className='cme'>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. 
     This allows you to access all chart properties and methods*/}
      </div>
    )
}

export default CurrentMonthExpenses
