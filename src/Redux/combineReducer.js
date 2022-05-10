import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import userReducer from './userReducer'
import usuarioReducer from './usuarioReducer'
import mensagemReducer from './mensagemReducer'
export default  combineReducers({
    item:itemReducer,
    usuario:usuarioReducer,
    user:userReducer,
    mensagem:mensagemReducer
})