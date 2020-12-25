import React from 'react';
import styled from 'styled-components';
import RightEye from '../../atoms/RightEye';
import LeftEye from '../../atoms/LeftEye';

const Component = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 390px;
    margin-top: -100px;
    margin-left: -195px;
`;

interface Props {}

const Eyes: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <RightEye />
            <LeftEye />
        </Component>
    );
};

export default Eyes;
