"use client";
import { useRef, useState, useEffect } from "react";
import Box from "@/components/Box";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import Tabela from "@/components/Tabela";
import Title from "@/components/Title";
import Produto from "@/core/produto";
import Fail from "@/components/Fail"
import Login from "@/components/Login";
import ProdutoRepositorio from "@/core/produtoRepositorio";
import ColecaoProduto from "@/backend/db/colecaoProduto";

import useProdutos from "@/hook/useProdutos";
import Footer from "@/components/Footer";
import { iconStore } from "@/components/icons";

export default function Home() {
  const APP_PASSWORD:string = '321';

  const { 
    getALL,
    produtoSelected,
    produtoDelete,
    newProduct,
    saveProduct,
    tableVisible,
    showTable, 
    formVisible,
    showForm,
    produto,
    produtos
  } = useProdutos();

  //estados para login
  const [senha, setSenha] = useState<any>('')
  const senhaRef = useRef<HTMLInputElement>(null)
  const [loginVisible, setLoginVisible] = useState(true)

function handleSubmit (){
  event?.preventDefault()
  
  setTimeout(()=>{
    setSenha(senhaRef?.current?.value)
  },3000);
  

  if(senhaRef?.current?.value === '321'){
    document.querySelector('#sucesso')?.classList.remove('hidden')
    const audio:any = document.querySelector('#audio')

    setTimeout(()=>{
        setLoginVisible(false)
    },3000)


  } else {

      let pegaerro = document.querySelector("#erro")
      pegaerro?.classList.remove('hidden')

      document.querySelector('#fail')?.classList.remove('hidden')
      const audiofail:any = document.querySelector('#audiofail')
      setTimeout(() =>{
        pegaerro?.classList.add('hidden')
        window.location.reload();
      }, 1000)
      
    }
  
}


  return (

    <Container>
      <h2 className=" text-white font-medium text-lg">Sistema de Cadastro de produtos V 0.1</h2>
      {loginVisible ? <Login onSubmit={handleSubmit} inputRef={senhaRef}/>
        : false
        }

      {
      //Verificação de
      senha === APP_PASSWORD ? 
      
      (
        
        <Box>
          
      <Title title="Cadastro de produto" className=" flex justify-center items-center lg:block lg:py-4 lg:ml-2"></Title>
          {tableVisible ?
          <> 
            <Button onClick={newProduct} containerStyle="flex justify-center items-center lg:block" className=" mb-3 ml-2 text-center font-bold text-gray-900 rounded-md bg-purple-400 w-36 p-2
            ">
            Novo Produto
            </Button>
            <Tabela produtos={produtos} produtoSelected={produtoSelected} produtoDelete={produtoDelete}/>
          </>
          :
          <Form 
            produto={produto} 
            cancelado={showTable}
            productChange={saveProduct}
          />  
          }

      </Box>
        )
       : <Fail />
       } 
      <Footer />
    </Container>
  )

  }
