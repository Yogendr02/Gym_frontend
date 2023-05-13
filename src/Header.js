import { useReducer, useState } from "react"
export default function Header({onclick,onsearch}){
    const [but,setbut] = useState(true)
    const reducer = (stat,action)=>{
        if(action.type==="categorychange"){
            return{
                ...stat,
                categoryvalue: action.payload
            }
        }
        if(action.type==="searchchange"){
            setbut(false)
            return{
                ...stat,
                searchvalue: action.payload
            }
        }
    }
    const [stat,dispatch] = useReducer(reducer,{
        categoryvalue: "Categories",
        searchvalue: "Search"
    })
    const categorychange = (event)=>{
        dispatch({
            type: "categorychange",
            payload: event.target.value
        })
    }
    const butfunc = ()=>{
        setbut(true)
    }
    const searchchange = (event)=>{
        dispatch({
            type: "searchchange",
            payload: event.target.value
        })
    }
    if(stat.categoryvalue!=="Categories"){
        onclick(stat.categoryvalue)
    }
    if(stat.searchvalue!=="Search" && but===true){
        onsearch(stat.searchvalue)
    }
    if(stat.searchvalue!=="Search" && but===false){
        onsearch("")
    }
    return(<div className="flex flex-row w-full h-16 bg-amber-400 rounded-full mt-2">
        <img className="h-16 w-32 rounded-full " src="https://cdn.dribbble.com/users/1573719/screenshots/16791231/media/bff2f2c1314df7da3fe4300463e1b914.png?compress=1&resize=400x300" alt=""  />
        <input className="basis-1/2 rounded-full p-4 w-96 h-12 m-2 bg-white ml-24" value={stat.searchvalue} onChange={searchchange}/>
        <button className="w-24 h-12 text-center bg-red-600 m-2 cursor-pointer border-double border-emerald-400 rounded-md" onClick={butfunc}>Search</button>
        <select className="h-12 m-2 ml-36 w-36 rounded-full bg-white pl-3 cursor-pointer" name="categories" onChange={categorychange}>
                 <option value="All Categories" >All Categories</option>
                 <option value="Core">Core</option>
                 <option value="Back">Back</option>
                 <option value="Shoulders">Shoulders</option>
                 <option value="Arms">Arms</option>
                 <option value="Chest">Chest</option>
                 <option value="Legs">Legs</option>
        </select>
    </div>)
}