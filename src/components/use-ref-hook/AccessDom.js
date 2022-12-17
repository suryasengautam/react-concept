import React, { useRef, useEffect, useState } from 'react'


function Access() {
    const [myData, setMyData] = useState('')
    // const [count,setCount] = useState(0)
   const inputElement = useRef('')
   const changeStyle  = () => {
     inputElement.current.style.height = '50px'

   }
  
    return (
        <div>
            <input
            ref = {inputElement}
             type='text' value={myData}
            onChange = {(e) => setMyData(e.target.value)}
            />
            <br/>
            <button onClick={changeStyle}>Submit</button>
        </div>
    )
}

export default Access