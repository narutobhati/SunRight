import { Appbar } from "../components/appbar"
import { Blogcard } from "../components/blogcard"
import { Blogskeleton } from "../components/blogskeleton"
import { Useblogs } from "../hooks"

export const Blogs=()=>{
    const {loading,blogs}=Useblogs()
    return(
        <>
        
            <Appbar  /> 
        
        <div className="flex justify-center">
        <div className="">
        {loading?<div><Blogskeleton/>
                        <Blogskeleton/>
                        <Blogskeleton/>
                        <Blogskeleton/>
         </div>
         :blogs.map( blog =>
    //@ts-ignore
  
    <Blogcard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate="24th feb 2024" id={blog.id}></Blogcard>
    
)}


    

</div>     
        </div>
         
        </>         
    )
}