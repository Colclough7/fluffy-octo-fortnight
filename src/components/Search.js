import React,{useContext} from 'react'
import {useGlobalContext} from '../context/Context'
import axios from 'axios'

const Search = () => {
    const {handleInput,search} = useGlobalContext()
    
    return (
        <section className="searchbox-wrapper">
            <input type="text" 
            placeholder="search for a movie..." 
            className="searchbox" 
            onChange={handleInput}
            onKeyPress={search}
            
            />
        </section>
    )
}

export default Search
