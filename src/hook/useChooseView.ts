import { useState } from "react";
export default function useChooseView (){
    const [isVisible, setIsvisble] = useState<'tabela' | 'form'>('tabela')

    const showTable = () =>{
        setIsvisble('tabela')
    }
    const showForm = () =>{
        setIsvisble('form')
    }

    //retornando um objeto com propriedades
    return {
        tableVisible: isVisible === 'tabela', // se o estado da tabela estiver visible retorna true
        formVisible: isVisible === 'form',// se o estado do form estiver visible retorna true
        showTable, showForm
    }
}