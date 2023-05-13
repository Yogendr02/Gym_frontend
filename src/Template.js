
export default function Template({name,img,desc}){
    return <>
        <div className="border-r-yellow-500 border-b-orange-500 shadow-lg shadow-blue-900 flex flex-row h-64 w-5/6 m-auto border-4">
            <div className="grid-cols-1 basis-2/3">
            <h1 className="font-bold m-2 italic underline">{name}</h1>
            <div className="m-3">{desc}</div>
            </div>
            <img src={img} className="h-56 m-4 ml-24 " alt="" />

        </div>
    </>
}