import { collection, addDoc, getDocs, deleteDoc, DocumentData, doc, getDoc, setDoc, DocumentSnapshot } from 'firebase/firestore';
import  Produto  from '@/core/produto';
import  ProdutoRepositorio  from '@/core/produtoRepositorio';
import firestore from '../config';

export default class ColecaoProduto implements ProdutoRepositorio {
    
    conversor = {
        toFirestore(produto: Produto): DocumentData {
            return {
                name: produto.name,
                coust: produto.coust,
                descricao: produto.descricao,
                price: produto.price
            };
        },

        fromFirestore(snapshot: DocumentSnapshot): Produto {
            const data = snapshot.data();
            if (data) {
                return new Produto(snapshot.id, data.name, data.coust, data.descricao, data.price);
            } else {
                // Lida com o caso em que data é undefined
                throw new Error("Dados do documento são undefined");
            }
        }
    };

    async salvar(produto: Produto): Promise<Produto> {
        const collectionRef = collection(firestore, 'produto').withConverter(this.conversor);

        if (produto?.id) {
            const produtoRef = doc(collectionRef, produto.id);
            await setDoc(produtoRef, produto, { merge: true });
            return produto;
        } else {
            const docRef = await addDoc(collectionRef, produto);
            const docSnap = await getDoc(docRef);
            return docSnap.data() as Produto;
        }
    }

    async excluir(produto: Produto): Promise<void> {
        const produtoRef = doc(collection(firestore, 'produto').withConverter(this.conversor), produto.id);
        await deleteDoc(produtoRef);
    }

    async getAll(): Promise<Produto[]> {
        const collectionRef = collection(firestore, 'produto').withConverter(this.conversor);
        const querySnapshot = await getDocs(collectionRef);

        return querySnapshot.docs.map(doc => doc.data()) ?? [];
    }
}


// import Produto from "@/core/produto";
// import ProdutoRepositorio from "@/core/produtoRepositorio";
// import firebase from "../config";

// export default class ColecaoProduto implements ProdutoRepositorio{
    
//     conversor = {
//         toFirestore(produto: Produto){
//             return {
//                 name: produto.name,
//                 coust: produto.coust,
//                 descricao: produto.descricao,
//                 price: produto.price
//             }
//         },

//         fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Produto {
//             const data = snapshot.data(options)
//             return new Produto(data.id, data.name, data.coust, data.descricao, data.price)
//         }

//     }
//     async salvar(produto: Produto): Promise<Produto> {
//         if(produto?.id) {
//             await this.collection().doc(produto.id).set(produto)
//             return produto
//         } else {
//             const docRef = await this.collection().add(produto)
//             const doc:any = await docRef.get()
//             return doc.data();
//         }
//     }
//     async excluir(produto: Produto): Promise<void>{
//         return this.collection().doc(produto.id).delete()
//         //Acesse um documento específico na coleção 'produto' com base no ID do produto. 
//         //Cada documento em uma coleção tem um identificador exclusivo, e você está usando o ID do produto para identificar 
//         //o documento a ser excluído.
        
//     }
//     async getAll(): Promise<Produto[]>{
//         const query = await this.collection().get(); //Pega toda a colecao

//         return query.docs.map(doc => doc.data()) ?? [] 
//         // pego todos os documentos da coleção uso o map pra retornar cada item e retorno o objeto com todos os itens doc.data

//     }
//     private collection(){
//         return firebase
//         .firestore().collection('produto')
//         .withConverter(this.conversor)
//     }
//     //firebase.firestore(): 
//     //^^ Isso indica que você está acessando o serviço Firestore do Firebase. 
//     //O Firestore é um banco de dados NoSQL oferecido pelo Firebase.
//     //Uma coleção é semelhante a uma tabela em bancos de dados relacionais.

// }

// //.doc é como se fosse uma busca por alguma coisa dentro de uma tabela no banco de dados NOSQL - recebe o parametro que sera procudrado - PRODUCT ID POR EXEMPLO