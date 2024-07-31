import { Link } from "react-router-dom"



export const Appbar=()=>{
    const username=localStorage.getItem("username") || "User"
    return <div  className="flex justify-between border-b border-slate-200 p-4 mx-10">
       
            <div>
            
            <Link to={'/blogs'}> <img className=" ml-5 h-20 w-28 " src="logo.png"  /></Link>
            </div>

 
            
       
        <div className="flex justify-evenly"> 
            <div className="flex justify-center flex-col mt-2 mr-5 ">
                <Link to={'/publish'}>  <button type="button" className=" text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                + New </button></Link>
               
            </div>
            <div className="flex justify-center flex-col mt-2 mr-5 ">
                <Link to={'/signin'}>  <button onClick={()=>{
                    localStorage.clear();
                }}   type="button" className=" text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                LogOut </button></Link>
               
            </div>

            <div className="flex justify-center flex-col cursor-pointer ">  <Avatar name={username}  ></Avatar></div>
           
        </div>
    </div>
}

export function Avatar({name}:{name:string}){
    return(

<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
<span className="text-lg font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

    )
}