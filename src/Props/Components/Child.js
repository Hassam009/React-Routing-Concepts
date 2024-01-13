import React from 'react'
import SuperChild from './SuperChild'
const Child = () => {
  return (
    <div>
         <div style={{ textAlign: 'center', marginTop: '50px' }}>
         <h1>I am Child Component</h1>
         </div>
    
      <SuperChild></SuperChild>
    </div>
  )
}

export default Child
