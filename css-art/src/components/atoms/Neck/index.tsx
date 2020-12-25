import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    position: absolute;
    top: 600px;
    left: 50%;
    width: 260px;
    height: 270px;
    margin-left: -130px;
    border-radius: 0 0 50% 50% / 0 0 20% 20%;
    background: #eed6b7;
`;
const NeckShadow = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 260px;
    height: 270px;
    margin-left: -130px;
    border-radius: 0 0 50% 50% / 0 0 20% 20%;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1) inset;
`;
const RightNeckMuscle = styled.div`
    position: absolute;
    top: 20%;
    left: 30%;
    width: 4px;
    height: 200px;
    margin-left: -2px;
    border-left: solid 5px #000000;
    border-radius: 0 0 50% 50% / 0 0 20% 20%;
    transform: rotate(-20deg);
    transform-origin: 50% 100%;
    opacity: 0.3;
    filter: blur(20px);
`;
const LeftNeckMuscle = styled.div`
    position: absolute;
    top: 20%;
    left: 70%;
    width: 2px;
    height: 200px;
    margin-left: -2px;
    border-right: solid 5px #000000;
    border-radius: 0 0 50% 50% / 0 0 20% 20%;
    transform: rotate(20deg);
    transform-origin: 50% 100%;
    opacity: 0.3;
    filter: blur(20px);
`;
const FaceShadow = styled.span`
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 260px;
    height: 105px;
    margin-left: -130px;
    background: #000000;
    border-radius: 0 0 50% 50% / 0 0 60% 60%;
    opacity: 0.4;
    filter: blur(5px);
`;

interface Props {}

const Neck: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <NeckShadow />
            <RightNeckMuscle />
            <LeftNeckMuscle />
            <FaceShadow />
        </Component>
    );
};

export default Neck;
