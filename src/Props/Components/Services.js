import React from 'react'

import Parent from './Parent'

const Services = () => {
  const listItems=["Item 1", "Item 2", "Item 3"]
  return (
    <>
    
     <Parent></Parent>
   
<h2>Now i used the Concepts of List and Keys</h2>
<ul>
  {listItems.map((Items, index)=>(
<li>{Items}</li>

  ))}
</ul>
    </>
 
  )
}

export default Services
