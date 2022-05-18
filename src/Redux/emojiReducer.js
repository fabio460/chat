const initialState = {
    figura:" "
}

const emojiReducer = (state=initialState, action)=>{
   switch (action.type) {
       case 'emoji':
           return {...state,figura: action.payload.figura}
   
       default:
           break;
   }
   return state
}
export default emojiReducer