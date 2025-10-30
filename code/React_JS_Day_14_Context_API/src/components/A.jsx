import React from 'react'
import B from './B'

const A = ({data}) => {
    
  return (
    <>
    <div>A :{data.ename}</div>
    <B data={data}/></>
  )
}

export default A