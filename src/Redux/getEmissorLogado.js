const initialState = {
    id:null
}

const getEmissorLogado = (state=initialState,action)=>{
    switch (action.type) {
        case "usuarioLogado":
            return {...state,id:action.payload.id}
    
        default:
            break;
    }
    return state
}

export default getEmissorLogado