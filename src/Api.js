const link = 'http://localhost:4001/'
const usuariosList = 'listarUsuarios'
const mensagens = 'listarMensagem'
const inserirMensagens = "inserirMensagem"
const deletarMensagem = "deletarMensagem"
const jwt = "jwt"
const Api = {
    listarUsuariosDasMensagens: (id_Receptor)=>{
        const formdata = new FormData()
        formdata.append('emissor',id_Receptor)
        const ids = fetch(link + 'getUsuariosDasMensagens',{
          method:"POST",
          body:formdata
        }).then(res=>res.json())
        return ids
    },
    listarMensagens: (emissor,receptor)=>{
      const formdata = new FormData()
      formdata.append('emissor',emissor)
      formdata.append('receptor',receptor)
      const usuarios = fetch(link + mensagens,{
        method:"POST",
        body:formdata
      })
      .then(res=>res.json())
      return usuarios
    },
     listarMensagens2:()=>{
       
     }
    ,
    listarUsuariosPorId:async (id)=>{
      const formdata = new FormData()
      formdata.append("id",id)
       const usuario = await fetch(link + usuariosList,{
         method:"POST",
         body:formdata
       }).then(res=>res.json())
       return usuario
    },
    enviarMensagens: (emissor,receptor,body)=>{
      const formdata = new FormData()
      formdata.append('emissor',emissor)
      formdata.append('receptor',receptor)
      formdata.append('body',body)
      fetch(link + inserirMensagens,{
        method:"POST",
        body:formdata
      })
      .then(res=>res.json())
      return "mensagem enviada com sucesso"
    },
    deletarMensagem: (id)=>{
      // alert('teste')
      const formdata = new FormData()
      formdata.append("id",id)
       const usuario =  fetch(link + deletarMensagem,{
         method:"DELETE",
         body:formdata
       }).then(res=>res.json()).catch(res=>console.log(res))
       return usuario
    },
    jwt: (email,senha)=>{
      const formdata = new FormData()
      formdata.append('email',email)
      formdata.append('senha',senha)
      const usuarios = fetch(link + jwt,{
        method:"POST",
        body:formdata
      })
      .then(res=>res.json())
      return usuarios
    }
}
export default Api