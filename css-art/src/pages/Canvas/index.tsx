import React from 'react';
import styled from 'styled-components';
import BackHair from '../../components/atoms/BackHair';
import FrontHair from '../../components/atoms/FrontHair';
import Neck from '../../components/atoms/Neck';
import Face from '../../components/organisms/Face';

const Component = styled.div`
    position: absolute;
    width: 640px;
    height: 870px;
    top: 50%;
    left: 50%;
    margin-top: -435px;
    margin-left: -320px;
`;

interface Props {}

const Canvas: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <BackHair />
            <Neck />
            <Face />
            <FrontHair />
        </Component>
    );
};

export default Canvas;
