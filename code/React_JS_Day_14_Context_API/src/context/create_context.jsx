import React from 'react'
import { useState } from 'react'

//import create_context function from react to create context variable
import { createContext } from 'react'

// defined context variable and called create_context()
const empID = createContext()
const empName = createContext()



const create_context = () => {

    const [data, setData] = useState({})
  return (
    <>
    <div>userContext</div>
    {/* Passing this created context to consumer via provider property with value */}
    <empID.Provider>

    </empID.Provider>
    </>
  )
}

export default create_context