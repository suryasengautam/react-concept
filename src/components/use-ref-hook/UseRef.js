import React, { useRef, useEffect, useState } from 'react'


function UseRef() {
    const [myData, setMyData] = useState('')
    // const [count,setCount] = useState(0)
   const count =  useRef(0)
   console.log("count",count);
    useEffect(() => {
        // setCount(count + 1)
        count.current = count.current + 1
    })
    return (
        <div>
            <input type='text' value={myData}
            onChange = {(e) => setMyData(e.target.value)}
            />
            <p>The number of times render : {count.current}</p>
        </div>
    )
}

export default UseRef