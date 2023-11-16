import { FormEvent, RefObject} from "react"
import Sucess from "./Sucess"
import { iconStore } from "./icons"


interface loginProps{
    onSubmit?: (event: FormEvent) => void
    inputRef?: RefObject<HTMLInputElement>
}

export default function Login (props: loginProps){
   return (
   <>
        
        <form onSubmit={props.onSubmit} className=" flex flex-col items-center justify-center gap-4 bg-white px-7 md:px-36 lg:px-80 rounded-lg
        shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
        ">
        {iconStore}
          <label className={` font-mono text-purple-800`}> Digite a senha de ADM</label>
          <input 
            type="password" 
            className=" text-center text-purple-800 font-sans font-extrabold w-[100%] h-10 rounded-lg focus:bg-slate-400, outline-none bg-slate-200"
            ref={props.inputRef}
          />
          <button type="submit" className="mb-3 ml-2 text-center font-bold text-gray-900 rounded-md bg-purple-400 w-36"> Acessar</button>
          </form>
          <Sucess/>
    </>
   ) 
}