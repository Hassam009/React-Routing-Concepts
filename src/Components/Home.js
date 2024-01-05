import React from 'react'

const Home = (props) => {
  // const data=props.title;
  return (
    <div className='Container1'>
      <h1>{props.title}</h1>
    <button type="button" class="btn btn-primary">Read More</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    </div>
  )
}

export default Home
