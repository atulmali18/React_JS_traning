import React from 'react'
import C from './C'

const B = ({data}) => {
    console.log(data);
    
  return (
    <>
    <div>B : {data.ename}</div>
    <C data={data}/>
    </>

    
  )
}

export default B