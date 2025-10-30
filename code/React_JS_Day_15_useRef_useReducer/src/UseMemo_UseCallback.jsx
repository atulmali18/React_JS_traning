import React, { useMemo, useState } from 'react'

const UseMemo_UseCallback = () => {

    const [count, setCount] = useState(1)
    const [item, setItem] = useState(0);


    const UpdateCount = () => {
        setCount(count + 1)
    }

    const UpdateItem = () => {
        setItem(item + 1)
    }


    // const Demo = () => {
    //     console.log("Demo Called")
    // }


    // useMemo
    // useMemo(callback_function,[dependency])

    const Demo = useMemo(() => {
        console.log("Demo Called")
        return count + 5
    }, [count])

    return (
        <div>

            <h1>UseMemo_UseCallback</h1>

            <h2>Used for Performance Optmization</h2>
            <hr />

            <h1>Initial Count {count}</h1>
            <h1>Initial Item {item}</h1>

            <button onClick={() => UpdateCount()}>Update Count</button>
            <button onClick={() => UpdateItem()}>Update Item</button>

            <h1>{Demo}</h1>
        </div>
    )
}

export default UseMemo_UseCallback