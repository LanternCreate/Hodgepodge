import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: #eed6b7;
`;
const Eyelid = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110px;
    height: 55px;
    margin-top: -65px;
    margin-left: -55px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    background: #eed6b7;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: rotate(10deg);
    transform-origin: 50% 100%;
    filter: blur(3px);
`;
const EyelidLight = styled.span`
    display: block;
    position: absolute;
    top: 2px;
    left: 40px;
    width: 30px;
    height: 25px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    background: #ffffff;
    transform: rotate(-10deg);
    transform-origin: 50% 100%;
    filter: blur(10px);
`;
const Eyebag = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110px;
    height: 40px;
    margin-top: 0;
    margin-left: -55px;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    background: #eed6b7;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: rotate(5deg);
    transform-origin: 50% 100%;
    filter: blur(4px);
`;
const EyebagLight = styled.span`
    display: block;
    position: absolute;
    bottom: 15px;
    left: 5px;
    width: 100px;
    height: 20px;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    background: #ffffff;
    filter: blur(5px);
`;
const Double = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 40px;
    margin-top: -40px;
    margin-left: -50px;
    border-top: solid 1px #000000;
    border-radius: 100% 100% 100% 100% / 90% 150% 50% 120%;
    filter: blur(2px);
`;
const Eyelash = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110px;
    height: 55px;
    margin-top: -34px;
    margin-left: -55px;
    border-top: solid 5px #000000;
    border-radius: 100% 100% 100% 100% / 90% 150% 50% 120%;
    filter: blur(2px);
`;
const Eye = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110px;
    height: 50px;
    margin-top: -30px;
    margin-left: -55px;
    border-radius: 100% 100% 100% 100% / 80% 150% 50% 120%;
    background: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5) inset;
    overflow: hidden;
    filter: blur(1px);
`;
const Cornea = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70px;
    height: 70px;
    margin-top: -40px;
    margin-left: -30px;
    border-radius: 50%;
    background: #67432d;
`;
const Iris = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border-radius: 50%;
    background: repeating-conic-gradient(transparent, transparent 12deg, #3f2416 15deg);
    filter: blur(1px);
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: -5px;
        left: -5px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: repeating-radial-gradient(#3f2416, transparent 65%);
        filter: blur(1px);
    }
`;
const Pupil = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    border-radius: 50%;
    background: #000;
    filter: blur(2px);
`;
const PupilLight = styled.span`
    display: block;
    position: absolute;
    top: -5px;
    left: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    filter: blur(1px);
`;

interface Props {}

const RightEye: React.FunctionComponent<Props> = (props) => {
    return (
        <Component>
            <Eyelid>
                <EyelidLight />
            </Eyelid>
            <Eyebag>
                <EyebagLight />
            </Eyebag>
            <Double />
            <Eyelash />
            <Eye>
                <Cornea>
                    <Iris>
                        <Pupil>
                            <PupilLight />
                        </Pupil>
                    </Iris>
                </Cornea>
            </Eye>
        </Component>
    );
};

export default RightEye;
