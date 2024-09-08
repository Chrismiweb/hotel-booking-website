import React, { useState } from 'react'

function Test() {
    const[userName, setUserName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [testing, setTesting] = useState(false)

    async function testApi(e){
        setTesting(true)
        e.preventDefault()
        const url = 'https://hotel-booking-backend-g6je.onrender.com/register'
        const response = await fetch(url,{
            method: "POST", 
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                userName,
                email,
                password
            })
        })
        .then(res=>res.json())
        if(response){
            setTesting(false)

            console.log(response)

        }
    }
  return (
    <div className='flex flex-col'>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName} name='userName' placeholder='userName' />
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} name='email' placeholder='email'/>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} name='password' placeholder='password'/>
        <button onClick={testApi}>{testing ? "testing" : "test"}</button>
    </div>
  )
}

export default Test
