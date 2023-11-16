interface TitleProps {
    title: string,
    children?: any
    className?: string
}

export default function Title (props: TitleProps){
    return (
        <div className="title">
            <h1 className={`
            text-4xl font-bold text-white flex items-start
            ${props.className}`}>
                {props.title}
            </h1>
        </div>
    )

}