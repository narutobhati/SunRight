import { Inputbox } from "./input"
import  {Link, useNavigate} from "react-router-dom"
import { SignupInput } from "@narutobhati/medium-common"
import { useState } from "react"
import axios from "axios"
import { Backend_Url } from "../connfig"
export const Auth=({type}:{type:"signin"| "signup" })=>{
    const navigate=useNavigate()
    const [inputs,setInputs]=useState<SignupInput>({
        email:"",
        password:"",
        name:""
    })

    async function sendinputs(){
        const response=await axios.post(`${Backend_Url}/api/v1/user/${type==="signin"?"signin":"signup"}`,inputs)
        const jwt=response.data.jwt
        localStorage.setItem("token",jwt)
        localStorage.setItem("username",response.data.username)
        navigate("/blogs")

    }
    return(
        <div className="flex justify-center">
            <div className="h-auto w-96  my-56">
               <div className=" text-center text-2xl font-bold  ">
                    {type==="signup"?"Create an Account":"Login to your account"}
               </div>
               <div className="text-center text-slate-500 ">
                    {type==="signup"?"Already have an account ? ":"Don't have an account ? "} 
                    <Link className="pl-1 underline" to={type==="signup"?"/signin":"/signup"}>{type==="signup"?"Login":"Signup"}</Link>
               </div>
               <div>
                {type==="signup"? <Inputbox label={"Username"} placeholder={"Naruto Bhati"} type={"text"} onchange={(e)=>{
                    setInputs({
                        ...inputs,
                        name:e.target.value
                    })
                 }} ></Inputbox>:null}
                
               </div>
               <div>
                 <Inputbox label={"Email"} placeholder={"xyz@email.com"} type={"text"} onchange={(e)=>{
                    setInputs({
                        ...inputs,
                        email:e.target.value
                    })
                 }}></Inputbox>
               </div>
               <Inputbox label={"Password"} placeholder={""} type={"password"} onchange={(e)=>{
                    setInputs({
                        ...inputs,
                        password:e.target.value
                    })
                 }}></Inputbox>
                <div className="mx-4 my-4">
                    <button onClick={sendinputs} className="w-full bg-black text-slate-50 text-center  hover:bg-white hover:text-slate-900 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        <div className="py-1">
                            {type==="signup"?"signup":"signin "}
                        </div>
                    </button>
                
                </div>
                    
            </div>
            
        </div>
    )
}