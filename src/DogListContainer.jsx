// @ts-check

import { useState,useEffect } from "react"

export const DogListContainer = () => {
  var [breeds,setBreeds] = useState(null);
  useEffect(() => {
    const fetchData = async()=>{
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(data.message);
    };
    fetchData();
  },[])
  return(
    <>
    {console.log({breeds})}
    </>
  )
}

export default DogListContainer
