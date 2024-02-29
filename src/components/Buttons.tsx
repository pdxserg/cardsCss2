import styled, {css} from "styled-components";
import {myThema} from "../styles/animations/Thema.styled";


type ButtonPropsType ={
	myColor?: string,
	bType: "first" | "second",
	active?: boolean,
	// second?: boolean
}
export const Button = styled.button<ButtonPropsType>`
    position: relative;
    left: 20px;
    top: 298px;
    margin-left: 20px;
	
    width: 86px;
    height: 30px;
    color: black;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700 ;
    cursor: pointer;

    ${props => props.active  && css<ButtonPropsType>`
        box-shadow: 5px 5px 5px 1px #a69090;
    `}

    

        ${props => props.bType === "first"  && css<ButtonPropsType>`
        background-color: ${props => props.myColor || "#26fc2a"};
      
        &:hover {
            background-color: ${myThema.colors.secon};
            
       ` }

        ${props => props.bType === "second" && css<ButtonPropsType>`
            border: 2px solid ${props => props.myColor || "#26fc2a"}; 
	        background-color: transparent;
            &:hover {
                border: 2px solid ${myThema.colors.secon};
                background-color: transparent;
    `}

        ${props => props.active  && css<ButtonPropsType>`
        box-shadow: 5px 5px 5px 1px #a69090;
    `}

`


 // export const Button2 =styled(Button)`
 //    border: solid;
 //    height: 30px;
 //    left: 118px;
 //    background-color: transparent;
 //
 //    &:hover {
 //        background-color: transparent;
 //        border-color: red;
 //        color: red;
 //    }
 //    `