import React from 'react';

const Caption = ({ caption }) => {
    if (caption) {
        return (
            <p>{caption}</p>
        );
    } else {
        return null;
    }
};

Caption.propTypes = {};

export default Caption;
