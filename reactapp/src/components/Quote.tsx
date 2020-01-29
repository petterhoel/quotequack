import React, {FunctionComponent} from 'react';

interface OwnProps {
    quote: string
}

type Props = OwnProps;

const Quote: FunctionComponent<Props> = ({quote}) => {
    return (
        <blockquote>
            <div className={'quote'}>
                {quote}
            </div>
        </blockquote>
    );
};

export default Quote;

