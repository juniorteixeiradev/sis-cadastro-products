"use client";
import { useRef, useState, useEffect } from "react";
import Box from "@/components/Box";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import Tabela from "@/components/Tabela";
import Title from "@/components/Title";
import Fail from "@/components/Fail"
import Login from "@/components/Login";

import useProdutos from "@/hook/useProdutos";
import Footer from "@/components/Footer";
import { iconStore } from "@/components/icons";
import useSenha from "@/hook/useSenha";

export default function Home() {
  
  const { armazenaSenha, 
    logout, 
    senhaExiste, 
    senhaNaoexiste, 
    APP_PASSWORD 
  } = useSenha();
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
  const senhaRef = useRef<HTMLInputElement>(null)
  const [loginVisible, setLoginVisible] = useState<boolean>(true)

 function handleSubmit (){
  event?.preventDefault()
  
  if(senhaRef?.current?.value === APP_PASSWORD){ //Logado com sucesso
    armazenaSenha(senhaRef?.current?.value);
    document.querySelector('#sucesso')?.classList.remove('hidden')

    setTimeout(()=>{
        setLoginVisible(false);
    },3000)


  } else {

      let pegaerro = document.querySelector("#erro")
      pegaerro?.classList.remove('hidden')

      document.querySelector('#fail')?.classList.remove('hidden')
      
      setTimeout(() =>{
        pegaerro?.classList.add('hidden')
        window.location.reload();
      }, 1000)
      
    }
  

  }

  return (

    <Container>
      
      <h2 className=" text-white font-medium text-lg">Sistema de Cadastro de produtos V 0.1</h2>
      {loginVisible && senhaNaoexiste 
      ? <Login onSubmit={handleSubmit} inputRef={senhaRef}/>
        : false
        }

      {
      //Verificação de senha
      senhaExiste ? 
      
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
            <button onClick={logout}>SAIR!</button>
      </Box>
        )
       : <Fail />
       } 
      <Footer />
    </Container>
  )

  }
