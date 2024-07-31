import { Avatar } from "./appbar"
import { Dot } from "./blogcard"


interface blogcontent{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string,
    id:string
}
//@ts-ignore
export const Fullblog=({title,content,authorName,publishedDate,id}:blogcontent)=>{
    return(
        <><div className="flex justify-center mt-10 ">
            <div className="flex">
                <div className="font-black text-6xl w-screen max-w-screen-lg ml-20">
                    {title}
                    <div className="flex ">
                        
                        <div className="flex justify-center flex-col pr-1">
                            <Dot></Dot>
                        </div>
                        <div className="text-slate-600 font-normal text-base py-4">
                            Posted on 24th feb 2024
                        </div>
                    </div>
                   
                    <div className="font-normal text-slate-800 text-xl">

                        {content}
                    </div>
                </div>
                <div className="ml-4 mt-3 mr-10 ">
                        Author
                    <div className="flex mt-1"> 
                        <div>
                            <Avatar name={authorName}></Avatar>
                        </div>
                        <div className="flex justify-center flex-col ml-4 font-semibold text-xl w-screen max-w-screen-sm">
                            {authorName}
                            {/* <div className="font-normal text-slate-700 text-base mt-2">
                                The mith the mahi the no. 7 the man the player sdknksajangkasdngkjnasgnag
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        
        </>
    )
}