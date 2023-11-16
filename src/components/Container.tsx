export default function Container (props:any){
    return (
        <div className={`
        w-[100%] h-screen flex flex-col justify-center items-center gap-4
        `}>
            {props.children}
        </div>
    )
}