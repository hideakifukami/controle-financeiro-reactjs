import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
  } from "react-icons/fa"

const Resume = () => {
  return (
    <C.Container>
        <ResumeItem 
            title="Entradas"
            Icon={FaRegArrowAltCircleUp}
            value="10000"
        />
        <ResumeItem 
            title="Saídas"
            Icon={FaRegArrowAltCircleDown}
            value="10000"
        />
        <ResumeItem 
            title="Total"
            Icon={FaDollarSign}
            value="10000"
        />
    </C.Container>
  )
}

export default Resume