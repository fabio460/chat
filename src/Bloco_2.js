import React from 'react'
import { useSelector } from 'react-redux'

export default function Bloco_2() {
  // const array = useSelector(state => state.usuario.array)
  const user = useSelector(state => state.usuario.array)
 console.log(user)
  return (
    <div>
       {user.map(item => {
           return(
              <div>
                  <div>{item.nome}</div>
                  <div>{item.email}</div>
                  <div>{item.role}</div>
              </div>
           )
       })}
      {/* {user.nome} */}

    </div>
    
  )
}
