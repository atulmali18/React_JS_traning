import React from 'react'
import userContext from './context/create_context'

const App = () => {
  const emp = {
    ename:"My Data From Parent",
    esal:400000
  }
  return (
    <div className='text-7xl text-amber-950 bg-amber-500 text-center '>
      <h1>Wellcome to Website</h1>
      {/* <A data={emp}/> */}
      <userContext /> 

    </div>
  )
}

export default App