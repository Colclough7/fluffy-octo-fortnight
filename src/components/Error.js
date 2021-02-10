import React,{useEffect} from 'react'
import {useGlobalContext} from '../context/Context'



const Error = () => {
    const myAlert = ()=>{
        setAlert(!alert)
    }
    const {alert,setAlert,search} = useGlobalContext()
    
    useEffect(() => {
        const timeout = setTimeout(()=>{
            setAlert(false)
          },3000)
          return ()=> clearTimeout(timeout,myAlert())
      }, [])    
    return (
        <div className="error">
            {alert&&<h1>Please Enter Value!</h1>}
        </div>
    )
}

export default Error
