import axios from "axios";
import { useEffect,useState } from "react";


export default function Axios(){
    const baseurl = 'https://gym-backend-1.onrender.com/gym-info'
    const [res,setres]=useState(null)
    const f = async()=>{
        await axios.get(baseurl).then((response)=>
            setres(response.data))

    }
    useEffect(()=>{f()},[])
    
    return res

}