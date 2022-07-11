import React, { useEffect, useState } from 'react'
import API_KEY from './Keys';

const CONTEXT_KEY ="6e4014a5cec234392"
//https://developers.google.com/custom-search/v1/using_rest 
//cuando se desactualiza ir a reactivar la apikey
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
