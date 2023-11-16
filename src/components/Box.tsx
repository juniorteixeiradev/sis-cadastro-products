interface boxProps{
    children?: any
    className?: string
}
export default function Box (props:boxProps){
    return (
        <div className={`
        bg-secundary rounded shadow-gray-500 flex flex-col w-auto lg:min-w-[80%]
        ${props.className}`}>
            {props.children}
        </div>
    );

}