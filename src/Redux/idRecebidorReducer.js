const initialState = {
    id:"nada"
}

const idRecebidorReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "idRecebidor":
            return { ...state, id:action.payload.id}
    
        default:
            break;
    }
    return state
}
export default idRecebidorReducer