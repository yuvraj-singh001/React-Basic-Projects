import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data,setData] = useState([])
    const data = useLoaderData()
        
    // useEffect(() => {
    //     fetch('https://api.github.com/users/yuvraj-singh001')
    //     .then(res=>res.json())
    //     .then(data=>{setData(data)})
    // }, [])
    // console.log(data)

  return (
    <div className='text-center m-4 bg-gray-600 text-3xl p-4 '>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="gitpicture" className='w-[300px] '/>
        </div>
  )
}

export default Github

export const githubinfoloader = async()=>{
  const response = await  fetch('https://api.github.com/users/yuvraj-singh001')
  return response.json()
}