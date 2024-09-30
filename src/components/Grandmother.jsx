import React from 'react'
import Mother from './Mother'
import Father from './Father'
function Grandmother() {
  return (
    <div className='gma'>Grandmother
      <div className="parentals">
        <Mother />
        <Father />
      </div>
    
    </div>
  )
}

export default Grandmother