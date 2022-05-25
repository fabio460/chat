const initialState = {
    lista: []
}

const listaUsuarioReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "lista":
            return { ...state, lista:action.payload.lista}
    
        default:
            break;
    }
    return state
}
export default listaUsuarioReducer