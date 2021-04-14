import React, { useState, useEffect } from 'react'
import LoadingShimmer from '../LoadingShimmer'
import './index.css'
import { MdPayment } from 'react-icons/md'

export function ServicesCard(prop) {
  return (
    <div className='tcard' key={prop.data.transaction_id}>
      <div className='profile'>
        <MdPayment size={50} />
      </div>
      <div className='tdatetime'>
        <h7>{prop.data.display_name}</h7>
        <p>{prop.data.currency}</p>
      </div>
      <div>
        <h6 className=''>{prop.data.account_number.number}</h6>
        <p>{prop.data.account_type}</p>
      </div>
    </div>
  )
}

function RecentServices() {
  //process.env.DOMAIN = 'http://localhost:80/mysite/TRUELAYERAUTH/'
  const [txnList, setTxnList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTxnList()
  }, [])

  const generateTxn = (txn) => {
    return <ServicesCard data={txn} />
  }

  const getTxnList = async () => {
    let uri = process.env.MYDOMAIN
    //let uri = 'http://localhost:80/mysite/TRUELAYERAUTH/'
    uri += 'get_accounts.php'
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
        <h5 className='rt-title'>Recent Services</h5>
        {txnList.results.map(generateTxn)}
      </div>
    )
  }
}

export default RecentServices
