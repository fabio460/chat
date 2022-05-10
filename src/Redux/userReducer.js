import avatar from '../Imagens/Avatars/perfil.PNG'
const initialState = {
    nome:"Fabio Da Silva",
    email: "fabio@gmail.com",
    avatar:avatar,
    role:"ola meu nome é Fabio"  
}

const userReducer = (state=initialState,action)=>{
     switch (action.type) {
         case 'users':
             return {
                 ...state,
                 nome:action.payload.nome,
                 email: action.payload.email,
                 avatar: action.payload.avatar,
                 role: action.payload.role
                }
     
         default:
             break;
     }
     return state
}
export default userReducer