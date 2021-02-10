import React,{useContext} from 'react'
import {useGlobalContext} from '../context/Context'
import Result from './Result'



const Results = () => {
const {state:{results}} = useGlobalContext()

    return (
        <section className="results">
            {results.map((result)=><Result key={result.imdbID} result={result} ></Result>)}
        </section>
    )
}

export default Results
