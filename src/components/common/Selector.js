import { useState } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
    padding-right: 20px;
    border-right: 1px solid gray;
    .individual{
        border-radius: 5px 0 0 5px;
    }
    .team{
        border-radius: 0 5px 5px 0;
        border-width: 1px 1px 1px 0px;
    }
`
const SelectBox = styled.div`
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: 100px;
    height: 25px;
    vertical-align: middle;
    line-height: 25px;
    border: 1px solid #07f;
    font-size: 12px;
    font-weight: bold;
    color: #07f;
    background-color: ${(props) => (props.isSelected ? '#07f' : '#fff')};
    color: ${(props) => (props.isSelected ? '#fff' : '#07f')};
    :hover {
        background-color: #07f;
        color: #ffffff;
        cursor: pointer;
    }
`

const Selector = () => {
    const [isSelected, setIsSelected] = useState(true)

    const indiHandler = () => {
        setIsSelected(true)
    };
    const teamHandler = () => {
        setIsSelected(false)
    };

    return (
        <SelectContainer>
            <SelectBox
                className="individual"
                onClick={indiHandler}
                isSelected={isSelected}
            ><i className="fa-solid fa-user"></i> 개인전</SelectBox>
            <SelectBox
                className="team"
                onClick={teamHandler}
                isSelected={!isSelected}
            ><i className="fa-solid fa-users"></i> 팀전</SelectBox>
        </SelectContainer>
    )
}

export default Selector;