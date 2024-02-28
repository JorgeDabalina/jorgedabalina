import React from 'react';

const Caption = ({ caption }) => {
    if (caption) {
        return (
            <p className="mt-2">{caption}</p>
        );
    } else {
        return null;
    }
};
export default Caption;
