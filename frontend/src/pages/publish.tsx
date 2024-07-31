import { useState } from "react"
import { Appbar } from "../components/appbar"
import axios from "axios"
import { Backend_Url } from "../connfig"
import { useNavigate } from "react-router-dom"

export const Publish=()=>{
    const [title,settitle]=useState("")
    const [content,setcontent]=useState("")
    const navigate=useNavigate()
    return <div>
        <Appbar />
       
            <div className="flex justify-center mt-7">   
               
                 <textarea onChange={(e)=>{
                    settitle(e.target.value)
                 }}  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border  w-screen max-w-screen-lg" placeholder="Title"></textarea>
            </div>
            <div className="flex justify-center mt-5">

            <textarea onChange={(e)=>{
                setcontent(e.target.value)
            }} rows={8} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border w-screen max-w-screen-lg " placeholder="Your story...."></textarea>
            </div>
            <div className="flex justify-center mt-5">
            <button onClick={async ()=>{
                   const response =await axios.post(`${Backend_Url}/api/v1/blog`,{
                    tittle:title,
                    content:content
                   },{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                   }) 
                   const id=response.data.id
                   navigate(`/blog/${id}`)
            }}   type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
            </div>
        
    </div>

}