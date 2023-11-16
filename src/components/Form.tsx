import Produto from "@/core/produto";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import Box from "./Box";

interface formProps{
    produto: Produto //Chamo a classe produto com todas suas propriedades
    cancelado?: () => void
    productChange?: (produto: Produto) => void
}
export default function Form (props:formProps){
    const verId = props.produto?.id;
    //Existe algum id dentro desse parametro? ou seja existe algum produto? não? retorna null


    const [nomeprod, setNomeprod] = useState(props.produto?.name || '');
    const [coustprod, setCoustprod] = useState(props.produto?.coust || 0);
    const [descprod, setDescprod] = useState(props.produto?.descricao || '');
    const [priceprod, setPriceprod] = useState(props.produto?.price || 0);

    return(
        <>
        <Box className={`px-2 py-4
        `}>
        {verId ? <Input text="ID:" type="number" onlyRead value={verId}/>:false}
            <Input 
                text="Nome:" 
                type="text"
                value={nomeprod}
                onChange={setNomeprod}
                styleLabe=" font-medium text-white font-sans"
            />
            <Input 
                text="Descrição:" 
                type="text"
                value={descprod}
                onChange={setDescprod}
                styleLabe=" font-medium text-white font-sans"
            />
            <Input 
                text="Custo:" 
                type="number"
                value={coustprod}
                onChange={setCoustprod}
                className=" w-20"
                styleLabe=" font-medium text-white font-sans"
            />
            <Input 
                text="Preço:" 
                type="number"
                value={priceprod}
                onChange={setPriceprod}
                className=" w-20 "
                styleLabe=" font-medium text-white font-sans"
            />
        </Box>
            <div className="py-4">
            <Button 
            onClick={() => props.productChange?.(new Produto(verId, nomeprod, coustprod, descprod, priceprod))}
            className=" mb-3 ml-2 text-center font-bold text-gray-900 rounded-md bg-purple-400 w-36 p-2 hover:bg-purple-300">
            Salvar!
            </Button>
            <Button 
            onClick={props.cancelado} // referenciando que irá ser chamado a função cancelado que é um setState la no Page.tsx
            className=" mb-3 ml-2 text-center font-bold text-gray-900 rounded-md bg-purple-400 w-36 p-2 hover:bg-purple-300">
            Cancelar!
            </Button>
            </div>
        </>
        
    )
}