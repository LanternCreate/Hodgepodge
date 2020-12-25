import React from 'react';
import styled from 'styled-components';
import Nose from '../../atoms/Nose';
import Mouth from '../../atoms/Mouth';
import Eyebrows from '../../molecules/Eyebrows';
import Eyes from '../../molecules/Eyes';

const Component = styled.div`
    display: block;
    position: absolute;
    top: 100px;
    left: 50%;
    width: 460px;
    height: 600px;
    margin-left: -230px;
`;
const Contour = styled.span`
    display: block;
    position: relative;
    width: 460px;
    height: 600px;
    background-color: #eed6b7;
    border-radius: 40% 40% 60% 60% / 50% 50% 70% 70%;
    overflow: hidden;
`;
const ForeheadLight = styled.span`
    display: block;
    position: absolute;
    top: 40px;
    left: 50%;
    width: 60px;
    height: 150px;
    margin-left: -30px;
    border-radius: 50%;
    background: #ffffff;
    transform-origin: 50% 100%;
    filter: blur(35px);
`;
const Shadow = styled.span`
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 480px;
    height: 600px;
    margin-left: -240px;
    background-color: #eed6b7;
    border-radius: 50% 50% 55% 55% / 50% 50% 65% 65%;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    filter: blur(20px);
`;
const RightCheekLight = styled.span`
    display: block;
    position: absolute;
    top: 55%;
    left: 20%;
    width: 60px;
    height: 70px;
    margin-left: -30px;
    border-radius: 0 0 50% 50% / 0 0 50% 50%;
    background: #ffffff;
    transform-origin: 50% 100%;
    opacity: 0.5;
    filter: blur(20px);
`;
const LeftCheekLight = styled.span`
    display: block;
    position: absolute;
    top: 55%;
    left: 80%;
    width: 60px;
    height: 70px;
    margin-left: -30px;
    border-radius: 0 0 50% 50% / 0 0 50% 50%;
    background: #ffffff;
    transform-origin: 50% 100%;
    opacity: 0.5;
    filter: blur(20px);
`;
const RightMouthShadow = styled.span`
    display: block;
    position: absolute;
    top: 79%;
    left: 27%;
    width: 10px;
    height: 80px;
    border-left: solid 10px #000000;
    border-radius: 50% 0 0 50% / 50% 0 0 50%;
    transform: rotate(5deg);
    transform-origin: 50% 100%;
    opacity: 0.4;
    filter: blur(25px);
`;
const LeftMouthShadow = styled.span`
    display: block;
    position: absolute;
    top: 79%;
    left: 69%;
    width: 10px;
    height: 80px;
    border-right: solid 10px #000000;
    border-radius: 0 50% 50% 0 / 0 50% 50% 0;
    transform: rotate(-5deg);
    transform-origin: 50% 100%;
    opacity: 0.5;
    filter: blur(25px);
`;

interface Props {}

const Face: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <Contour>
                <Shadow />
                <ForeheadLight />
                <Eyes />
                <Nose />
                <Eyebrows />
                <RightCheekLight />
                <LeftCheekLight />
                <Mouth />
                <RightMouthShadow />
                <LeftMouthShadow />
            </Contour>
        </Component>
    );
};

export default Face;
