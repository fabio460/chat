const initialState = {
    mensagem:[
        {
            usuario:"fabio",
            receptorDaMensagem:"ruth",
            mensagem:"ola ruth tudo bem ?",
            horaDaMensagem:"14:30"
        },
        {
            usuario:"fabio",
            receptorDaMensagem:"ana",
            mensagem:"ola Ana tudo bem ?",
            horaDaMensagem:"12:30"
        }
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