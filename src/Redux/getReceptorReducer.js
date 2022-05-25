const initialstate = {
    funcao:null
}
const gerReceptorReducer = (state=initialstate,action)=>{
   switch (action.type) {
       case 'receptor':
           return {...state,funcao:action.payload.funcao} 
       default:
           break;
   }
   return state
}
export default gerReceptorReducer