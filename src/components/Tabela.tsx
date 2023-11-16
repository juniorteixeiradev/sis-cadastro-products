import Produto from "@/core/produto"
import Button from "./Button";
import { iconEdit, iconLixo } from "./icons";

interface TabelaProps {
    produtos: Produto[]
    produtoSelected?: (produto: Produto) => void
    produtoDelete?: (produto: Produto) => void
}

export default function Tabela (props:TabelaProps){

    const showActions = props.produtoSelected || props.produtoDelete;

    function renderActions (produto:Produto){
        return (
            
            <td className="flex justify-center items-center">
                {props.produtoSelected ? 
                <Button 
                onClick={() => props.produtoSelected?.(produto)} 
                className="rounded-full hover:bg-purple-50 text-green-700 p-4">{iconEdit}</Button> 
                : false}
                
                {props.produtoDelete ?
                <Button 
                onClick={() => props.produtoDelete?.(produto)} 
                className="rounded-full hover:bg-purple-50 text-red-700 p-4 ">
                {iconLixo}
                </Button> 
                : false}
            </td>
        )
    }


    function renderHeader(){
        return (
        <tr>
            <th className="text-left lg:py-4">id</th>
            <th className="text-left lg:py-4">Nome</th>
            <th className="text-left lg:py-4">Custo</th>
            <th className="text-left lg:py-4">Descrição</th>
            <th className="text-left lg:py-4">Preço</th>
            {showActions ?  
            <th className="lg:py-4">Ações</th> 
            : false}
            
        </tr>
        )
    }

    

    function renderData(){
        return (
        props.produtos?.map((produto, i) => {
            return(
            
                    <tr key={produto.id} className={`${i % 2 === 0 ? 'bg-purple-300': 'bg-purple-200'}`}>
                        <td className="max-w-[50px] whitespace-normal overflow-hidden lg:py-4">{produto.id}</td>
                        <td className="lg:py-4">{produto.name}</td>
                        <td className="lg:py-4">{produto.coust} R$</td>
                        <td className="max-w-[80px] overflow-hidden lg:py-4">{produto.descricao}</td>
                        <td className="lg:py-4">{produto.price} R$</td>
                        {showActions ? renderActions(produto):false}
                    </tr>
            

            )}));
    } 
    
    




    return (
        <table className=" rounded-md">
            <thead className="bg-gray-100 rounded">
                {renderHeader()}
            </thead>
            
            <tbody className="">
                {renderData()}
            </tbody>
            
        </table>
        
    );
}