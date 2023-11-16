export default class Produto {
    #id: string;
    #name: string;
    #coust: number;
    #descricao: string;
    #price: number;

    constructor(id: string, name:string, coust:number, descricao:string, price:number){
        this.#id = id;
        this.#name = name;
        this.#coust = coust;
        this.#descricao = descricao;
        this.#price = price;
    }

    get id (){
        return this.#id;
    }
    get name (){
        return this.#name;
    }
    get coust (){
        return this.#coust;
    }
    get descricao (){
        return this.#descricao;
    }
    get price (){
        return this.#price;
    }

    static vazio (){
        return new Produto('','',0, '', 0);
    }
        
    
}
