const  initialState = {
    mensagens:[]
}

const mensagensReducer = (state=initialState,action)=>{
    switch ('mensagensApi') {
        case action.type:
            return {...state,mensagens:action.payload.mensagens}
    
        default:
            break;
    }
    return state
}
export default mensagensReducer