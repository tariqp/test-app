import { useContext } from "react"
import { AppContext } from "../../App"



export const DataPage =  ({}) =>  { 
    const { phoneSelector } = useContext(AppContext);
    
    console.log(phoneSelector);
    return(
        <p>Data</p>
    )
}