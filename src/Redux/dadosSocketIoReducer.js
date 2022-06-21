const initial = {
    dados:{}
}

const dadosSocketReducer = (state=initial,action)=>{
    switch (action.type) {
        case "socket":
            return {...state,dados:action.payload.dados}
    
        default:
            break;
    }
    return state
}
export default dadosSocketReducer