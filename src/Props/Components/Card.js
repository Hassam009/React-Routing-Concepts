import React from 'react'

const Card = (props) => {
  return (
  <>
   <div classNameName="card" style={{ width: '18rem' }}>
        <img src={props.src} classNameName="card-img-top" alt="..." />
        <div classNameName="card-body">
          <h5 classNameName="card-title">{props.TitleName}</h5>
          <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" classNameName="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  </>
  )
}

export default Card
