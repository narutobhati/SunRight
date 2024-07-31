import { Link } from "react-router-dom"

interface blogcontent{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string,
    id:string
}
export const Blogcard=({authorName,title,content,publishedDate,id}:blogcontent)=>{

    return(


        <Link to={`/blog/${id}`}> <div className="w-screen max-w-screen-lg m-2  mx-2 border-b border-slate-200 pb-5 p-5  cursor-pointer">

        <div className="flex">
            <div>

                <Avatar name={authorName}></Avatar> 
            </div>
            <div className="flex justify-center flex pl-2 text-slate-900 font-normal">
                {authorName}
            </div>

            <div className="flex justify-center flex-col pl-2">
                <Dot></Dot>
            </div>
            <div className="pl-2 text-slate-500 text-sm flex justify-center flex-col">
                {publishedDate}
            </div>

        </div>
       
        <div className="mt-2 text-3xl font-bold mb-1">
            {title}
        </div>
        <div className="font-normal text-slate-700 ">
            {content}
        </div>
        <div className="mt-4 text-slate-600 text-sm font-light">
         {Math.ceil(content.length)/100} min read
        </div>
    </div></Link>
        
    )}




export function Dot(){
    return <div className="w-1 h-1 rounded-full bg-slate-400">

    </div>
}

function Avatar({name}:{name:string}){
        return(

<div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

        )
    }