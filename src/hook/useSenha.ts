import { useState } from "react";

export default function useSenha(){

    // const [senhaexiste, setSenhaexiste] = useState();
    const APP_PASSWORD:string = '321';
    
    function armazenaSenha(senha:any){
        localStorage.setItem("pass", senha);
    }
    function mostraSenha(){
        return localStorage.getItem("pass");
    }
    function logout (){
        localStorage.removeItem("pass");
        window.location.reload();
    }


    const localGetPass = localStorage.getItem("pass");
    return {
        senhaExiste: localGetPass === '321',
        senhaNaoexiste: localGetPass != '321',
        armazenaSenha,
        mostraSenha,
        logout, localGetPass, APP_PASSWORD
        

    }
}