import React, { useContext } from 'react'
import { AppContext } from '../../Hooks/UseContext'

const SuperChild = () => {

    const userData=useContext(AppContext);
  return (
   <>
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>I am super Child</h1>
      <h3>Or mera Data yeh Hai "{userData.name} "</h3>
      </div>
   </>
         
  )
}

export default SuperChild
