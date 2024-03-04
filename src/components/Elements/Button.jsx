// import React from 'react';

const Button = (props) => {
    const { classname, children, type = 'button', onClick } = props;
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${classname} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm`}>
            {children}
        </button>
    );
};

export default Button;
