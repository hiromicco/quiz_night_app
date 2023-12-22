import { MouseEvent } from "react";
import styled from "styled-components";

const Options = () => {
    const options = ['Amazon Redshift', 'AWS Storage Gateway', 'AWS Database Migration Service', 'AWS Glue'];

    const SOptions = styled.div`
        margin-bottom: 60px;
        .option {
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 10px;
            background-color: #D3E1E9;
            padding: 12px;
            margin-bottom: 15px;
            text-align: left;
            cursor: pointer;
        }

        /* &:hover {
            opacity: .7;
        } */

        .isSelected {
            background-color: #4B7F9B;
        }    
    `

    const selectHandler = (e: MouseEvent) => {
        console.log(e)
        e.target
    }
    return (
        <SOptions>
            {options.map((option) => <button className="option" key={option} onClick={selectHandler}>{option}</button>)}
        </SOptions>
    )
}

export default Options;