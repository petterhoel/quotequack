import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

const Container = styled.span`
    display: flex;
    align-items: flex-center;
    justify-content: center;
`;

const QuackSpan = styled.span`
    filter: invert(1);
    font-size: 1.5em;
    min-height: 88px;
    margin-left: -8px;
    display: flex;
    align-items: flex-end;
`;

const DuckSpan = styled.span`
    filter: invert(1);
`;

const Logo: FunctionComponent = () => {
    return (
        <Container>
            <DuckSpan role="img" aria-label="speak bubble emoji">🗨</DuckSpan>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <QuackSpan role="img" aria-label="duck emoji">🦆</QuackSpan>
        </Container>
    );
};

export default Logo;
