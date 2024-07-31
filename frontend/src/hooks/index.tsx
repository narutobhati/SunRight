import { useEffect, useState } from "react"
import axios from "axios"
import { Backend_Url } from "../connfig"


export const Useblogs=()=>{
    const [loading,setloading]=useState(true)
    const [blogs,setblogs]=useState([])
    
    useEffect(()=>{
        axios.get(`${Backend_Url}/api/v1/blog/bulk`,{
            headers:{
            "authorization":localStorage.getItem("token")
        }})
        .then(response=>{
            setblogs(response.data.blog)
            setloading(false)
        })
    },[]) 
    return {loading,blogs}

}

export const useBlog=({id}:{id:string})=>{
    const [loading,setloading]=useState(true)
    const[blog,setblog]=useState({})
    useEffect(()=>{
        axios.get(`${Backend_Url}/api/v1/blog/${id}`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then(response=>{
            setblog(response.data.blog)
            setloading(false)
        })
    },[])

    return {loading,blog}
}