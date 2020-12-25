import React from 'react';
import styled from 'styled-components';
import RightEyebrow from '../../atoms/RightEyebrow';
import LeftEyebrow from '../../atoms/LeftEyebrow';

const Component = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 410px;
    margin-top: -100px;
    margin-left: -205px;
`;

interface Props {}

const Eyebrows: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <RightEyebrow />
            <LeftEyebrow />
        </Component>
    );
};

export default Eyebrows;
