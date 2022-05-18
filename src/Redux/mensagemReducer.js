const initialState = {
    mensagem:[
        {
            id:1,
            usuario:"Ruth",
            receptorDaMensagem:"Fabio",
            mensagem:"ola ruth tudo bem ?",
            horaDaMensagem:"14:30"
        },
        {
            id:2,
            usuario:"Fabio",
            receptorDaMensagem:"Ruth",
            mensagem:"Oi Fabio tudo bem, e vc ?",
            horaDaMensagem:"12:30"
        },
        {
            id:1,
            usuario:"Ruth",
            receptorDaMensagem:"Favio",
            mensagem:"So queria saber como vc estava, boa noite",
            horaDaMensagem:"14:30"
        },
        {
            id:1,
            usuario:"Ruth",
            receptorDaMensagem:"Fabio",
            mensagem:"Amanha agente se fala",
            horaDaMensagem:"14:45"
        },
        {
            id:2,
            usuario:"Fabio",
            receptorDaMensagem:"Ruth",
            mensagem:"Amanha agente se fala",
            horaDaMensagem:"14:45"
        },
        
     
    ]
}

const mensagemReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'mensagem':
           return {
                ...state,
                usuario:action.payload.mensagem,
                receptorDaMensagem:action.payload.receptorDaMensagem,
                mensagem:action.payload.mensagem
            }
        default:
            break;
    }
    return state
}
export default mensagemReducer