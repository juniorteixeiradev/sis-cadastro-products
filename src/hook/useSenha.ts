import { useState } from "react";

export default function useSenha(){
    
    const localGetPass = typeof window !== 'undefined' ? localStorage.getItem("pass"):null;
    
    const APP_PASSWORD:string = '321';
    // const localGetPass = localStorage.getItem("pass");


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

   
    
    return {
        senhaExiste: localGetPass === '321',
        senhaNaoexiste: localGetPass != '321',
        armazenaSenha,
        mostraSenha,
        logout, localGetPass, APP_PASSWORD
        

    }
}