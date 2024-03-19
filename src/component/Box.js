import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1 className='you'>You</h1>
      <img src={props.item.img}/>
      <h2>Win</h2>
    </div>
  )
}

export default Box