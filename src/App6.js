import { addDoc, collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {db} from './fireBaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth';



import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,  } from "firebase/auth";

export default function App6() {
    const auth = getAuth();  
    const [usuarios,setUsuarios] = useState([])
    const [usuarioLogado,setUsuarioLogado]=useState([])
    const [visivel,setVisivel]=useState(true)
    const [user] = useAuthState(auth);
   
    const [sala,setSala]= useState()
    const provider = new GoogleAuthProvider();
    const [mensagens,setMensagens] = useState([])
  
async function cadastrarUsuario(email,nome,senha,avatar,uid,data) {
addDoc(collection(db, "user"), {
    email,
    nome,
    senha,
    avatar,
    uid,
    data
    });
}

const [numUsuer,setNumUser]=useState(1)

const logar = ()=>{


 

    signInWithPopup(auth, provider)
  .then(async(result) => {

    const colRef = query(collection(db, "user"),where("email", "==", auth.currentUser.email))
    onSnapshot(colRef, (snapshot) => {
        let tamanhoArray = snapshot._snapshot.docChanges.length
        
        
        if (tamanhoArray === 0) {
                cadastrarUsuario(auth.currentUser.email,auth.currentUser.displayName,"",auth.currentUser.photoURL,numUsuer,new Date())
                console.log(auth.currentUser.email+" cadastrado com sucesso")    
               
        }        
    })

  }).catch((error) => {

    // ...
  });
}

const [idLogado,setIdLogado] =useState(null)

async function gerarIdUsuarioLogado(user) {
  
  let logadoRef = query(collection(db,"user"),where("email","==",user.email))
  onSnapshot(logadoRef,(snapshot)=>{
     snapshot.docs.forEach(async doc=>{
       let id = await doc.data().uid
       await setIdLogado( id )
       return id
     })
  })
}

useEffect(()=>{
  gerarIdUsuarioLogado(user)
  // criando um id autoincrement inteiro no banco
  const colRef2 = query(collection(db, "user"),orderBy("uid"))
      onSnapshot(colRef2, (snapshot) => {
        let aux = []
          snapshot.docs.forEach((doc) => {
              aux.push(doc.data())  
          })
          let defined = aux[aux.length - 1]
          if (defined !== undefined) {
            setNumUser(defined.uid + 1)
          }
      })
  async function isLog() {
        
    let logado = await auth.currentUser.providerData 
     setUsuarioLogado(logado)
     return logado
  }
  isLog()
    const colRef = query(collection(db, "user"))
    onSnapshot(colRef, (snapshot) => {
        let aux = []
        snapshot.docs.forEach((doc) => {
            aux.push(doc.data())  
        })
        setUsuarios(aux)
    })
      
        
},[user,auth,usuarioLogado,idLogado])


const logout = () => {
    signOut(auth);
    window.location.reload()
};


const [mensagem,setMensagem]=useState()
const [receptorId]=useState()




const [ultimaMensagem,setUltimaMensagem]=useState(1)

const enviarMensagem =async (e)=>{

   if (e.code === 'Enter') {
      if (mensagem !== "" & receptorId !== "") {
        
        const mensagemRef = query(collection(db,"chats"),orderBy("uid"))
        let aux =[]
        onSnapshot(mensagemRef,(snapshot)=>{
         snapshot.docs.forEach(doc=>{
           aux.push(doc.data())
         })
         let defined = aux[aux.length-1]
         //console.log(defined)
         if (defined !== undefined) {
           setUltimaMensagem(defined.uid + 1)
         }
        })
        //console.log(ultimaMensagem)
        addDoc(collection(db, "chats"), {
          sala,
          usuarioLogado:user.displayName,
          mensagem,
          photoURL:user.photoURL,
          data:new Date(),
          uid:ultimaMensagem
        });

      }
      setMensagem("")
   }
}
const enviarMensagemBtn = ()=>{
  if (mensagem !== "" & receptorId !== "") {
        
    const mensagemRef = query(collection(db,"chats"),orderBy("uid"))
    let aux =[]
    onSnapshot(mensagemRef,(snapshot)=>{
     snapshot.docs.forEach(doc=>{
       aux.push(doc.data())
     })
     let defined = aux[aux.length-1]
     //console.log(defined)
     if (defined !== undefined) {
       setUltimaMensagem(defined.uid + 1)
     }
    })
    //console.log(ultimaMensagem)
    addDoc(collection(db, "chats"), {
      sala,
      usuarioLogado:user.displayName,
      mensagem,
      photoURL:user.photoURL,
      data:new Date(),
      uid:ultimaMensagem
    });

  }
  setMensagem("")
}


function gerarSala(a,b) {
   let frase = a.toString() + b.toString()
   let array = frase.split('')
   
   let arrayOrd = array.sort()
   let res = ""
   arrayOrd.forEach(element => {
      res += element
   });
   return res
}

const getReceptor = async(e)=>{
  setVisivel(false)
  setSala(gerarSala( e.target.id , idLogado))
   let mensagemRef = query(    
      collection(db,"chats"),
      where( 
        "sala" ,
         "==" ,
          gerarSala( e.target.id , idLogado)
      ),
      orderBy("uid")
    )
   onSnapshot(mensagemRef,(snapshot)=>{
     let array = []
     snapshot.docs.forEach((doc,key)=>{     
       array.push(doc.data())
       console.log(doc.data().uid)
     })
    // console.log(array)
     setMensagens(array)
     
   })
}

  
  return (   
    <div>
        <div>{usuarioLogado.length
        ?
        <div>
           
            <header>
               <div className='headerUsuario'>
               <div className='headerUsuarioItem' >    
                          <img className='avatarHeader' src={user.photoURL} alt=''/>          
                          <div className='headerUsuarioTitle'>
                            {user.displayName}
                            
                          </div>
                      </div>
               </div>
               <button onClick={logout}>Deslogar</button>
            </header>
            <div className='bodyContainer'>
              
            <div className='sidebar'>
              
                {usuarios.map(item=>{
                 if (item.nome !== user.displayName) {
                  return<div>
                  <div id={item.uid} value='valus' className=' usuarioItens' onClick={getReceptor} >
                    <img id={item.uid} src={item.avatar} alt='' className='avatarHeader'/>
                    <div id={item.uid} className='headerUsuarioTitle' >{item.nome}</div>
                    
                  </div>
                </div>
                 }
                })}
            </div>
            {visivel?
              <div className='mensageBodySemMensagem'>Selecione um usuario !</div>
            :
              <div>
                <div className='homeMessagem'>
                    <div className='mensagens'>
                        <div className='mensagemBodyContainer'>
                          {mensagens.map(item=>{
                            return <div className='mensagemBody'
                              style={{justifyContent:item.usuarioLogado === user.displayName ?'':'flex-end'}}
                            >
                              <div 
                                className={item.usuarioLogado === user.displayName ?'mensagemUsuario':'mensagemReceptor'}
                              >{item.mensagem}</div>
                            </div>
                          })}
                        </div>
      
                    </div>
                    <div className='searchContainet'>
                      <input 
                          onKeyUp={enviarMensagem}
                          onChange={e=>setMensagem(e.target.value)}  
                          value={mensagem}
                        />
                        <button onClick={enviarMensagemBtn}>enviar</button>
                    </div>
                </div>  
              </div>}
    
            </div>       




        </div>
        :
        <div className='loginContainer'><button onClick={logar}>Logar com Google</button></div>  
      }</div>

        
       
    </div>
  )
}
