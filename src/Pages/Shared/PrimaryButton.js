import React from 'react';

const PrimaryButton = ({btnText}) => {
    return (
        <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">{btnText}</button>
    );
};

export default PrimaryButton;