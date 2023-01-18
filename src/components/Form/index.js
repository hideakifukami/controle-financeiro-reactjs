import React from 'react'
import * as C from './styles'

const Form = () => {
  return (
    <>
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input />
            </C.InputContent>
        </C.Container>
    </>
  )
}

export default Form