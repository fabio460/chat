import avatar from '../Imagens/Avatars/perfil.PNG'
const initialState = {
   array: [
    {
        nome:"Fabio Da Silva",
        email: "fabio@gmail.com",
        avatar:avatar,
        role:"ola meu nome é Fabio",
        quantidadeDeMensagem:3,
        receptorDaMensagem:"Ruth"   
    },
    {
        nome:"Ruth",
        email: "Ruth@gmail.com",
        avatar:avatar,
        role:"ola meu nome é Ruth",
        quantidadeDeMensagem:2,
        receptorDaMensagem:"Ana"   
    },
    {
        nome:"Anailza",
        email: "Anailza@gmail.com",
        avatar:avatar,
        role:"ola meu nome é Ana",
        quantidadeDeMensagem:1,
        receptorDaMensagem:"Fabio"   
    },
   ]
}

 const usuarioReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "user":
            return {
                ...state,
                array:action.payload.array,
            }
    
        default:
            break;
    }
    return state
}
export default usuarioReducer