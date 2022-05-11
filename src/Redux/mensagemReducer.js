const initialState = {
    mensagem:[
        {
            id:1,
            usuario:"Fabio",
            receptorDaMensagem:"Ruth",
            mensagem:"ola ruth tudo bem ?",
            horaDaMensagem:"14:30"
        },
        {
            id:2,
            usuario:"Ruth",
            receptorDaMensagem:"fabio",
            mensagem:"Oi Fabio tudo bem, e vc ?",
            horaDaMensagem:"12:30"
        },
        {
            id:1,
            usuario:"Fabio",
            receptorDaMensagem:"ruth",
            mensagem:"So queria saber como vc estava, boa noite",
            horaDaMensagem:"14:30"
        },
        {
            id:1,
            usuario:"Fabio",
            receptorDaMensagem:"ruth",
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