import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    position: absolute;
    top: 43%;
    left: 50%;
    width: 80px;
    height: 180px;
    margin-left: -40px;
    background: #eed6b7;
`;
const Shadow = styled.span`
    display: block;
    position: absolute;
    top: -15%;
    left: 50%;
    width: 120px;
    height: 200px;
    margin-left: -60px;
    background: #000000;
    border-radius: 50% 50% 50% 50% / 50% 50% 20% 20%;
    opacity: 0.1;
    filter: blur(50px);
`;
const Back = styled.div`
    position: absolute;
    left: 50%;
    width: 40px;
    height: 160px;
    margin-left: -20px;
    border-radius: 30% 30% 50% 50% / 100% 100% 10% 10%;
    background: #eed6b7;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    filter: blur(4px);
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 5%;
        left: 50%;
        width: 10px;
        height: 140px;
        margin-left: -5px;
        border-radius: 30% 30% 50% 50% / 100% 100% 10% 10%;
        background: #ffffff;
        opacity: 0.7;
        filter: blur(5px);
    }
`;
const RightWing = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    width: 40px;
    height: 45px;
    margin-left: -50px;
    border-radius: 70% 30% 30% 30% / 70% 30% 30% 30%;
    background: #eed6b7;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    filter: blur(4px);
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 45%;
        left: 50%;
        width: 20px;
        height: 25px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 70% 30% 30% 30% / 70% 30% 30% 30%;
        background: #ffffff;
        opacity: 0.7;
        filter: blur(4px);
    }
`;
const LeftWing = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    width: 40px;
    height: 45px;
    margin-left: 10px;
    border-radius: 30% 70% 30% 30% / 30% 70% 30% 30%;
    background: #eed6b7;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    filter: blur(5px);
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 45%;
        left: 50%;
        width: 20px;
        height: 25px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 30% 70% 30% 30% / 30% 70% 30% 30%;
        background: #ffffff;
        opacity: 0.7;
        filter: blur(5px);
    }
`;

interface Props {}

const Nose: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <Shadow />
            <RightWing />
            <LeftWing />
            <Back />
        </Component>
    );
};

export default Nose;
