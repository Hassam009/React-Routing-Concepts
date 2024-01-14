import React from 'react'

import Parent from './Parent'

const Services = () => {
  const listItems=[
  {ID:1 , text:"Item 1"},
  {ID:2 , text:"Item 2"} ,
  {ID:3 , text:"Item 3"} 
]
  return (
    <>
    
     <Parent></Parent>
   
<h2>Now i used the Concepts of List and Keys</h2>
<ul>
  {listItems.map((Items)=>(
<li key={Items.ID}>{Items.ID} Item is {Items.text}</li>

  ))}
</ul>
    </>
 
  )
}

export default Services
