import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    width: 450px;
    height: 280px;
    margin-left: -225px;
    filter: blur(1px) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3));
`;
const RightHair = styled.div`
    width: 225px;
    height: 280px;
    border-radius: 100% 0 0 0 / 100% 0 0 0;
    background: repeating-radial-gradient(circle at 200% 100%, #442712, #5e3619 1.5% 1.5%);
`;
const LeftHair = styled.div`
    width: 225px;
    height: 280px;
    border-radius: 0 100% 0 0 / 0 100% 0 0;
    background: repeating-radial-gradient(circle at -100% 100%, #442712, #5e3619 1.5% 1.5%);
`;
const Light = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 50px;
    margin-left: -200px;
    background: #ffffff;
    border-radius: 50% 50% 10% 10% / 50% 50% 50% 50%;
    opacity: 0.5;
    filter: blur(25px);
`;

interface Props {}

const FrontHair: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <RightHair />
            <LeftHair />
            <Light />
        </Component>
    );
};

export default FrontHair;
