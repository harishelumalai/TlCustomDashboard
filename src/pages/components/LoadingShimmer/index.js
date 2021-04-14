import React from 'react'
import './index.css'

function LoadingShimmer() {
  return (
    <div class='lscard lsbr'>
      <div class='lswrapper'>
        <div class='lsprofilePic lsanimate lsdin'></div>
        <div class='lscomment lsbr lsanimate lsw80'></div>
        <div class='lscomment lsbr lsanimate'></div>
        <div class='lscomment lsbr lsanimate'></div>
      </div>
    </div>
  )
}

export default LoadingShimmer
