import React, { useState } from "react";
import styled from "styled-components";

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

            &:hover {
            opacity: .8;
            }  

            &.isSelected {
            background-color: #4B7F9B;
            }  
        }  
    `

const Options: React.FC<{options: string[]}> = ({options}) => {
    const [ selectedOption, setSelectedOption ] = useState<string | null>(null);

    // const options = ['Amazon Redshift', 'AWS Storage Gateway', 'AWS Database Migration Service', 'AWS Glue'];

    const selectHandler = (option: string) => {
        console.log(option)
        setSelectedOption(option)
    }
    return (
        <SOptions>
            {options?.map((option) => (
                <button
                className={`option ${selectedOption === option ?  'isSelected' : ''}`}
                key={option} 
                onClick={() => selectHandler(option)}
                >
                    {option}
                </button>
            ))}
        </SOptions>
    )
}

export default Options;