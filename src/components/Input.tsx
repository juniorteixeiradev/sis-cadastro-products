interface inputProps{
    text: string
    type?: 'text' | 'number' | 'password' | 'submit'
    value?: any
    onlyRead?: boolean
    className?: string
    styleLabe?: string
    onChange?: (value: any) => void

}
export default function Input (props:inputProps){
    return(
        <div className="flex flex-col">
        <label className={props.styleLabe}>{props.text}</label>
        <input
            type={props.type ?? 'text'} 
            value={props.value}
            readOnly={props.onlyRead}
            onChange={(e) =>{props.onChange?.(e.target.value)}}

            className={
                `border-purple-500 py-3 rounded-lg w-10/12
                focus:outline-none bg-gray-100 mb-2
                ${props.onlyRead ? '' : 'focus:bg-white'} 
                ${props.className}`
            }
        />
        </div>
        
    )
}