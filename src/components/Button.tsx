interface ButtonProps {
    className?: string
    onClick?: () => void
    children?: any
    containerStyle?: string
}

export default function Button (props: ButtonProps){
    return(
        <div className={props.containerStyle}>
        <button onClick={props.onClick} className={props.className}>
            {props.children}
        </button>
        </div>
    )
    
}