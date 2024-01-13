import React, { useContext } from 'react'
import SuperChild from './SuperChild'
import { AppContext } from '../../Hooks/UseContext'
const Child = () => {

    const userData= useContext(AppContext)

  return (
    <div>
         <div style={{ textAlign: 'center', marginTop: '50px' }}>
         <h1>I am Child Component</h1>
         <h2>Mera Data yeh Hai "{userData.childData}"</h2>
         </div>
    
      <SuperChild></SuperChild>
    </div>
  )
}

export default Child
