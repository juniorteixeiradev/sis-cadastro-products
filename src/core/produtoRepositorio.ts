import Produto from "./produto";


export default interface ProdutoRepositorio{
    salvar: (produto: Produto) => Promise<Produto>
    excluir: (produto: Produto) => Promise<void>
    getAll: () => Promise<Produto[]>
}