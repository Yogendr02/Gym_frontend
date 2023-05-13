import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Main({con}){
    const count = useRef(0)
    const [a,seta] = useState(true)
    const [b,setb] = useState(true)
    // const [c,setc] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        count.current = count.current + 1
    },[a])

    if(b===true){
        setTimeout(()=>{seta(!a)},1000)
    }
    
    if(count.current===120){
        navigate(-1)
    }

    console.log(count)
    return (
        <>
        <div className="text-orange-500 text-8xl font-bold text-center underline italic -mt-8">
            Tutorial !
        </div>
        <br />
        <iframe src={con.vdo} className="w-3/5 h-80 m-auto" title="kuchh bhi"></iframe>
        <br />
        <div className="text-orange-500 text-2xl font-semibold text-center italic -mt-4">
            Timer for 120 seconds !
        </div>
        <div className="flex flex-row m-auto justify-center">
        <div className="w-1/5 h-18 font-semibold text-4xl text-red-600 bg-yellow-200 text-center border-2 rounded-full ">{count.current}</div>
        <div className="w-24 border-red-100 rounded-full bg-lime-300 text-center pt-2 ml-2 cursor-pointer" onClick={()=>{setb(!b)}}>Start/Stop</div>
        </div>
        </>
    )
}