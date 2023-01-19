import styled from "styled-components";

export const Tr = styled.tr``

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")}; //Alinhas apenas o que tem essa prop
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
    }
`