import { useState, useEffect } from "react";

import ProdutoRepositorio from "@/core/produtoRepositorio";
import Produto from "@/core/produto";
import ColecaoProduto from "@/backend/db/colecaoProduto";
import useChooseView from "./useChooseView";


export default function useProdutos (){
    


    const repo:ProdutoRepositorio = new ColecaoProduto;
    const { tableVisible, formVisible, showForm, showTable } = useChooseView();
    
    //seleção de tabela ou formulario!!
    const [produto, setProduto] = useState<Produto>(Produto.vazio())
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(getALL, []);

    function getALL(){
        repo.getAll().then(produtos =>{
        setProdutos(produtos)
        showTable();
        })
    }
    function produtoSelected(produto: Produto){
        setProduto(produto)
        showForm();
    }
    async function produtoDelete(produto: Produto){
        await repo.excluir(produto)
        getALL()
        }

    function newProduct (){
        setProduto(Produto.vazio())
        showForm();
    }
    async function saveProduct (produto: Produto){
        await repo.salvar(produto)
        getALL()
    }

    return {
        //funções
        getALL,
        produtoSelected,
        produtoDelete,
        newProduct,
        saveProduct,
        tableVisible, 
        showTable,
        formVisible,
        showForm,
        //estados
        produto, setProduto,
        produtos, setProdutos,

    }

}