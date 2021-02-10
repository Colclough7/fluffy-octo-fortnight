import React,{useContext} from 'react'
import axios from 'axios'



const Popup = ({selected,closePopup}) => {
    const {Title,Year,imdbRating,Poster,Plot} = selected
    return (
     <section className="popup">
         <div className="content">
             <h2>{Title} <span>({Year})</span></h2>
             <p className="rating">Rating: {imdbRating}</p>
             <div className="plot">
                 <img src={Poster} />
                 <p>{Plot}</p>
             </div>
             <button className="close" onClick={closePopup}>close</button>
         </div>
     </section>
    )
}

export default Popup
