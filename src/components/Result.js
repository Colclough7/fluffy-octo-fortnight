import React from 'react'
import {useGlobalContext} from '../context/Context'

const Result = ({result}) => {
    const {openPopup} = useGlobalContext()
    const {Poster,Title,imdbID} = result
    return (
        <div className="result" onClick={()=>openPopup(imdbID)}>
            <img src={Poster}/>
            <h3>{Title}</h3>
        </div>
    )
}

export default Result
