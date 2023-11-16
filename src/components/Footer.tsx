import Link from "next/link";

interface footerProps{
    children?:any
}

export default function Footer (props:footerProps){
    return(
    <footer className=" bottom-0 flex items-center justify-center">
        <div>
            <p className=" font-sans font-medium text-white "> Desenvolvido por  
                <Link href="https://www.linkedin.com/in/junior-teixeiradev/" target="_blank" className=" font-extrabold"> Jun1or Te1xe1ra.</Link>
                </p>
        </div>
    </footer>
    )
}