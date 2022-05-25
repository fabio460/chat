import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import userReducer from './userReducer'
import usuarioReducer from './usuarioReducer'
import mensagemReducer from './mensagemReducer'
import mensagensReducer from './arrayDeMensagensReducer'
import emojiReducer from './emojiReducer'
import listaUsuarioReducer from './listaUsuarioReducer'
import gerReceptorReducer from './getReceptorReducer'
import idRecebidorReducer from './idRecebidorReducer'
import getEmissorLogado from './getEmissorLogado'
export default  combineReducers({
    item:itemReducer,
    usuario:usuarioReducer,
    user:userReducer,
    mensagem:mensagemReducer,
    mensagensApi:mensagensReducer,
    emoji:emojiReducer,
    lista:listaUsuarioReducer,
    funcao:gerReceptorReducer,
    idRecebidor:idRecebidorReducer,
    idEmissor:getEmissorLogado
})