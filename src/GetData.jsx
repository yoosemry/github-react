import React, { useContext, useEffect, useState } from 'react'
import {CreateContent} from './App'

const GetData = () => {
  const [search , setSearch] = useState('');
  
const {data , setData} = useContext(CreateContent);

useEffect(()=>{
  const fetGithub = async ()=>{


      try {
        
        const response = await fetch(`https://api.github.com/users/${search}`);
        const dataGithub = await response.json();
        console.log(dataGithub);
         setData(dataGithub);
        

      } catch (error) {
        console.log(error)
      }
    
   
  }   
  fetGithub();
},[search])

  return (

    <div className='input-conn'>


    <input placeholder='Enter username' className='input' onChange={(e)=> setSearch(e.target.value)} value={search}  />

    </div>
  )
}

export default GetData