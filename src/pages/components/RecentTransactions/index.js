import React, { useState, useEffect } from 'react'
import LoadingShimmer from '../LoadingShimmer'
import './index.css'
import { MdPayment } from 'react-icons/md'

export function TransactionCard(prop) {
  return (
    <div className='tcard' key={prop.data.transaction_id}>
      <div className='profile'>
        <MdPayment size={50} />
      </div>
      <div className='tdatetime'>
        <h6>{prop.data.date}</h6>
        <p>{prop.data.time}</p>
      </div>
      <div>
        <h5 className=''>{prop.data.amount}</h5>
        <p>{prop.data.transaction_type}</p>
      </div>
    </div>
  )
}

function RecentTransactions() {
  //process.env.DOMAIN = 'http://localhost:80/mysite/TRUELAYERAUTH/'
  const [txnList, setTxnList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTxnList()
  }, [])

  const generateTxn = (txn) => {
    return <TransactionCard data={txn} />
  }

  const getTxnList = async () => {
    let uri = process.env.MYDOMAIN
    //let uri = 'http://localhost:80/mysite/TRUELAYERAUTH/'
    uri += 'get_transactions.php'
    setLoading(true)
    const response = await fetch(uri)
    const data = await response.json()
    console.log(data)
    setTxnList(data)
    setLoading(false)
  }
  if (loading) {
    return <LoadingShimmer />
  } else {
    return (
      <div className='recent-txn'>
        <h5 className='rt-title'>Recent Transactions</h5>
        {txnList.results.map(generateTxn)}
      </div>
    )
  }
}

export default RecentTransactions
