import React, { useEffect, useState } from 'react'
import {  query, where } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import InputLogin from './Componentes/inputLogin';
import Button from '@mui/material/Button';
import db from './Componentes/fireBase'
import {onSnapshot } from "firebase/firestore";
export default function App5() {
    const [nome,setNome]=useState()
    const [email,setEmail]=useState()
    const [senha,setSenha]=useState()
    const [dados,setDados]=useState([])

    const inserir =async ()=>{
        try {
            if (nome && email && senha) {
                const docRef = await addDoc(collection(db, "users"), {
                    nome,
                    email,
                    senha
                  });
                  console.log("Document inserido com ID: ", docRef.id);
            }
           
          } catch (e) {
            console.error("Error adding document: ", e);
          }
  
    }
 
    console.log(dados.sort())
    useEffect(() => {
      const colRef = collection(db, "users")
      onSnapshot(colRef, (snapshot) => {
        let aux = []
          snapshot.docs.forEach((doc) => {
              aux.push(doc.data())  
          })
          setDados(aux)
      })
  }, [])
  
  return (
    <div>
        <InputLogin setNome={setNome} setEmail={setEmail} setSenha={setSenha} inserir={inserir}/>
{/*              
        <Button 
             variant="contained"
             sx={{width: '45ch',marginTop:"20px"}}
             onClick={inserir}
          >
             Entrar
        </Button> */}
        <div>
            {dados.map((item,key)=>{
                return <div id={key}>
                    <div>{item.nome}</div>
                </div>
            })}
            
        </div>
    </div>
  )
}
