import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
`;
const Light = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 20px;
    margin-top: -100px;
    margin-left: -50px;
    border-top: solid 10px #ffffff;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    transform: rotate(5deg);
    transform-origin: 50% 100%;
    filter: blur(10px);
`;
const Eyebrow = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 35px;
    margin-top: -100px;
    margin-left: -80px;
    border-top: solid 20px #5e3619;
    border-radius: 50% 30% 0 0 / 100% 30% 0 0;
    transform: rotate(10deg);
    transform-origin: 50% 100%;
    opacity: 0.45;
    filter: blur(2px) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
`;

interface Props {}

const RightEyebrow: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <Light />
            <Eyebrow />
        </Component>
    );
};

export default RightEyebrow;
