import React, { useEffect, useState } from 'react'
import API_KEY from './Keys';

const CONTEXT_KEY ="15848e1d4704dcbce"

 const useGoogleSearch = (term) => {
  


  const [data, setData] = useState(null);
  
  useEffect(()=>{
console.log("LLegue a Useeffect")
    const fetchData =async() =>{
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        ).then(Response => Response.json())
            .then(result =>{
                                setData(result)
                            }
        )
    }

    fetchData();

  },[term])

return{data}


}


export default useGoogleSearch;
