const initialState = {
    nome: "fabio",
    email: "fabio@gmail"
}

const ItemReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "item":
            return { ...state, nome:action.payload.nome, email:action.payload.email}
    
        default:
            break;
    }
    return state
}
export default ItemReducer