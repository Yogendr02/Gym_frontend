import Template from "./Template"
import Axios from "./Axios"
import { Link } from "react-router-dom"

export default function List({onsubmit,lis,slis}){
    const gig = Axios()
    const handleclick = (e)=>{
        onsubmit(e)
        console.log(e)
    }
    console.log(gig)
    console.log(lis)
    console.log(slis)
    var giga;
        

if((slis!==null && slis!=="")){
    giga = gig.filter((item)=>{return item.name===slis})
}else if(lis==="All Categories" || lis===null || slis===""){
    giga = gig
}if(lis!==null && lis!=="All Categories"){
    giga = gig.filter(item=>{return item.type===lis})
}


    var printing;
    if (giga!=null){
         printing = giga.map(item=>{return (<Link to='/main'><div onClick={()=>{handleclick(item)}} key={item.id}><Template name={item.name} img={item.img} desc={item.desc} />
         <br/></div></Link>) })
    }
    return(<>
        {printing}
    </>
    )
}