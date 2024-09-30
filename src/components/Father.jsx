import React from 'react'
import Son from "./Son"
function Father({heirloom,permission}) {
  return (
    <div className='dad'>Father
    
    <div style={{border:"solid peru"}}>{heirloom}</div>
    <Son />
    

    </div>
  )
}

export default Father