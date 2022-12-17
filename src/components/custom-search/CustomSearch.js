import React, { useEffect, useState } from 'react'

function CustomSearch() {
    const [userData,setUserData] = useState([])
    useEffect(() => {
        const data = [
            {name :'suryasen',age : '21',profession :"software developer"},
            {name :'vikash',age : '23',profession :"doctor"},
            {name :'vipin',age : '25',profession :"civil engineer"},
            {name :'manoj',age : '29',profession :"project manager"},
        ]
        setUserData(data)

    })
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>age</th>
                <th>profession</th>
            </tr>
            <tbody>
                {
                    userData && userData.length > 0 ?
                    userData.map( item =>  )
                }
            </tbody>




        </table>



    </div>
  )
}

export default CustomSearch