import NavigationBar from '@/components/navigation.bar'
import React, { useEffect, useState } from 'react'


interface IAddress{
  street1:string,
  city:string,
  state:string,
  zipcode:string
}

interface IGeo{
  type:{
      type:string,
      enum:["Point"],
      required:true
  },
  coordinates:{
      type:[number,number],
      required:true
  }
}

interface ILocation{
  address:IAddress,
  geo:IGeo
}

interface ITheater {
  theaterId:number,
  location:ILocation,
}

const URL = "http://localhost:8080/theater/list"
const Theaters =():JSX.Element => {
  const [theater, setTheater] = useState<ITheater[]>([])
  const theaterList = async():Promise<void>=>{
    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setTheater(FETCHED_JSON)
    console.log(FETCHED_JSON);
  }
  useEffect(() =>{
    theaterList()
  },[])
  
  return (
    <div>
      <NavigationBar/>
      <h1>Theater list</h1>
      {theater.map((e:ITheater)=>
          
          <p key={e.theaterId}>
            {e.theaterId}
          </p>
        
      )}

   
    </div>
  )
}

export default Theaters