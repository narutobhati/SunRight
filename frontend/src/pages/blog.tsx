import { useParams } from "react-router-dom";
import { Appbar } from "../components/appbar"
import { Fullblog } from "../components/fullblog";
import { useBlog } from "../hooks"

export const Blog=()=>{
    const {id}=useParams()
    
    const {blog,loading}=useBlog({
        id:id || " "
    });

    return(
    
        <>
        <Appbar/>
        <div>
        {loading?"loading.....":
            //@ts-ignore
            <Fullblog authorName={blog.author.name} title={blog.tittle} content={blog.content}  publishedDate="24th feb 2024" id=""></Fullblog>
        
         
         }

        </div>
        
        </>
    )
}