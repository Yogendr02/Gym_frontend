import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import List from "./List"
import Main from "./Main"

import { useState } from "react"
export default function App(){
    const [con,setcon] = useState(null)
    const [lis,setlis] = useState(null)
    const [slis,setslis] = useState(null)
    const onsubmit = (newcon)=>{
        setcon(newcon)
    }
    const onclick = (newlis)=>{
        setlis(newlis)
    }
    const onsearch =(newslis)=>{
        setslis(newslis)
    }
    return(<>

    <Header onclick={onclick} onsearch={onsearch}/>
    <br />

    <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<List onsubmit={onsubmit} lis={lis} slis={slis}/>}></Route>
        <Route path="/main" exact element={<Main con={con}/>}></Route>
        </Routes>
    </BrowserRouter>
    

    </>)
}

