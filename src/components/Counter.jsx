import React, { useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => {
        setCount(count + 1)
        console.log(count)
    }
    const decrement = () => {   
        setCount(count - 1)
        console.log(count)
    }
    useEffect(() => {
        // function logic will be written here

        return () => {
            // this is cleanup function
        }
    }, [
        // This is Dependency Array
    ])
  return (
    <div style={{display: 'flex'}}>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter