import React,{useState,useContext} from 'react'
import {apiUrl} from '../data'
import axios from 'axios'


const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [alert,setAlert] = useState(true)
    const [state,setState] = useState({
        s:'',
        results:[],
        selected:{}
    })
    const handleInput = (e)=>{
        e.preventDefault()
        let movie = e.target.value
        if(movie){
            setState(prevState=>{
                return{...prevState,s:movie}
            })
        } 
       
    }
    const search = (e)=>{
        if(e.key=='Enter'){
            axios(apiUrl + "&s=" + state.s).then(({data})=>{
                let results = data.Search
            setState(prevState=>{
                    return {...prevState,results:results}
                })
            })
        }   
        
    }
    const openPopup = (id)=>{
        axios(apiUrl + "&i=" + id).then(({data})=>{
            let result = data
            setState(prevState=>{
                return {...prevState, selected:result}
            })
        })
    }
    const closePopup = ()=>{
        setState(prevState=>{
            return {...prevState,selected:{}}
        })
    }

    return(
        <AppContext.Provider value={{state,handleInput,search,openPopup,closePopup,alert,setAlert}}>
            {children}
        </AppContext.Provider>
    )
}


//Custom Hook 
export const useGlobalContext = ()=>{
    return(
        useContext(AppContext)
    )
}