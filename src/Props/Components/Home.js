import React from 'react'
import Card from './Card'

const Home = (props) => {
  // const data=props.title;
  return (
    <>
      <h1>{props.title}</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
      <Card TitleName="Image 1" src="/Images/B4.jpg" ></Card>
      <Card TitleName="Image 2" src="/Images/B5.jpg" ></Card>
      <Card TitleName="Image 3" src="/Images/B2.jpg" ></Card>
   
    </div>
    <button type="button" className="btn btn-primary">Read More</button>
    <button type="button" className="btn btn-secondary">Secondary</button>
    <button type="button" className="btn btn-success">Success</button>
    </>
    
  )
}

export default Home
