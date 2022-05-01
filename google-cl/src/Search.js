import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import "./Search.css"
import {Button}  from "@material-ui/core" 
import { useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import  {initialState, actionsType} from './reducer';

function Search({hidenButtons = false}) {

    const [{}, dispatch] = useStateValue();
 
    const  [input , setInput] = useState(""); 


    const history = useHistory();

    const search =e=>{
        e.preventDefault()
        // console.log("you hit the search bar line>>>", input)
    
    console.log("Hola mundo "+ input)
    
    
    dispatch({
      type: actionsType.SET_SEARCH_TERM,
      term: input

    })

        // dispatch({
        //   Type: actionsType.SET_SEARCH_TERM,
        //   term: input
    
        // })
    
        history.push('/search')
        // window.location.reload() 
      }
 
 
 
    return (
    <form className='search'>
        <div className='search__input'>
          <SearchIcon className='search__imputIcon' />
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        
        <MicIcon/>
        </div>

        {!hidenButtons ?( <div  className='search__buttons'>
          <Button type="submit" onClick={search} variant='outline' > Google  Search</Button>
          <Button variant='outline'> I´m feeling lucky</Button>
        </div>)
 :
            ( <div  className='search__buttons'>
          <Button className='search__buttonsHidden' type="submit" onClick={search}  variant='outlined' > Google  Search</Button>
          <Button className='search__buttonsHidden' variant='outlined'> I´m feeling lucky</Button>
        </div>)
 }

     


       
    </form>
  )
}

export default Search