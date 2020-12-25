import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    width: 640px;
    height: 620px;
    margin-left: -320px;
    filter: blur(1px);
`;
const RightHair = styled.div`
    width: 320px;
    height: 620px;
    border-radius: 130% 0 0 100%/ 80% 0 0 50%;
    background: repeating-radial-gradient(circle at 200% 60%, #442712, #5e3619 1% 1%);
`;
const LeftHair = styled.div`
    width: 320px;
    height: 620px;
    border-radius: 0 130% 100% 0 / 0 80% 50% 0;
    background: repeating-radial-gradient(circle at -100% 60%, #442712, #5e3619 1% 1%);
`;
const Light = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    width: 640px;
    height: 50px;
    margin-left: -320px;
    background: #ffffff;
    border-radius: 50% 50% 10% 10% / 50% 50% 50% 50%;
    opacity: 0.5;
    filter: blur(25px);
`;

interface Props {}

const BackHair: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <RightHair />
            <LeftHair />
            <Light />
        </Component>
    );
};

export default BackHair;
