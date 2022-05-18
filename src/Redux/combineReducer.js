import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import userReducer from './userReducer'
import usuarioReducer from './usuarioReducer'
import mensagemReducer from './mensagemReducer'
import mensagensReducer from './arrayDeMensagensReducer'
import emojiReducer from './emojiReducer'
export default  combineReducers({
    item:itemReducer,
    usuario:usuarioReducer,
    user:userReducer,
    mensagem:mensagemReducer,
    mensagensApi:mensagensReducer,
    emoji:emojiReducer
})