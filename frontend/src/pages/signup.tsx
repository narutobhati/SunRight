import { Quote } from "../components/quote"
import { Auth } from "../components/auth"
export const Signup=()=>{
    return(
        <> 
            <div className="grid grid-cols-1  lg:grid-cols-2">
                <div>
                    <Auth type={"signup"}></Auth>
                </div >
                <div>
                <Quote></Quote>
                </div>
               
                </div> 
         
        </>
    )
}