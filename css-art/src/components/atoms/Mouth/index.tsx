import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    position: absolute;
    top: 76%;
    left: 50%;
    width: 160px;
    height: 45px;
    margin-left: -80px;
`;
const UpperLip = styled.span`
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    width: 160px;
    height: 23px;
    margin-left: -80px;
    filter: blur(2px) drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1)) drop-shadow(0 -5px 10px rgba(255, 255, 255, 0.5));
    &::before {
        content: '';
        display: block;
        width: 50%;
        height: auto;
        border-radius: 100% 50% 0 100% / 100% 50% 0 50%;
        background: #f4b89e;
        box-shadow: 10px -5px 10px rgba(0, 0, 0, 0.1) inset;
    }
    &::after {
        content: '';
        display: block;
        width: 50%;
        height: auto;
        border-radius: 50% 100% 100% 0 / 50% 100% 50% 0;
        background: #f4b89e;
        box-shadow: -10px -5px 10px rgba(0, 0, 0, 0.1) inset;
    }
`;
const LowerLip = styled.span`
    display: block;
    position: absolute;
    top: -3px;
    left: 50%;
    width: 156px;
    height: 25px;
    margin-left: -78px;
    border-bottom: solid 30px #f4b89e;
    border-radius: 0% 0% 50% 50% / 0% 0% 80% 80%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    filter: blur(1px);
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 60%;
        left: 0;
        width: 100%;
        height: 35px;
        border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) inset, 0 0 20px rgba(0, 0, 0, 0.1);
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 130%;
        left: 32px;
        width: 60%;
        height: 5px;
        border-bottom: solid 5px #ffffff;
        border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
        filter: blur(6px);
    }
`;

interface Props {}

const Mouth: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <LowerLip />
            <UpperLip />
        </Component>
    );
};

export default Mouth;
