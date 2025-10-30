import React from 'react'
import D from './D'

const C = ({data}) => {
  return (
    <>
    <div>C: : {data.ename}</div>
    <D data={data}/>
    </>
  )
}

export default C