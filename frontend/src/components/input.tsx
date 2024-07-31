
interface labletype{
    label:string,
    placeholder:string,
    type:string
    onchange:(e:any)=>void
}
export const Inputbox=({label,placeholder,onchange,type}:labletype)=>{
    return(
        <div className=" mx-4 my-5">
      <label className="block text-gray-700 text-l font-bold mb-2" >
        {label}
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={onchange} id="username" type={type||"text"} placeholder={placeholder}/>
    </div>
    )
}