// import React from 'react';

import Button from '../Elements/Button';

export default function CardProduct({ children }) {
    return (
        <div className='w-full max-w-sm m-2 p-4 rounded-lg bg-slate-200 shadow-lg flex flex-col justify-between'>
            {children}
        </div>
    );
}

const Header = ({ image }) => {
    return (
        <div className='w-full h-80 bg-black rounded-lg'>
            <a href=''>
                <img
                    src={image}
                    alt='image'
                    className='p-3 rounded-lg w-full h-full object-fit-cover'
                />
            </a>
        </div>
    );
};

const Body = ({ children, title }) => {
    return (
        <div className='px-5 pb-5 mt-4'>
            <a href=''>
                <h5 className='text-xl font-semibold tracking-tight text-slate-700'>
                    {title.substring(0, 20) + ' ...'}
                </h5>
                <p className='text-slate-500 text-md'>
                    {children.substring(0, 100) + ' ...'}
                </p>
            </a>
        </div>
    );
};

const Footer = ({ children, handleAddCart, prd }) => {
    return (
        <div className='flex items-center justify-between pb-5'>
            <span className='text-2xl font-bold text-slate-700'>
                {children.toLocaleString('es-US', {
                    style: 'currency',
                    currency: 'USD',
                })}
            </span>
            <Button onClick={() => handleAddCart(prd)}>Add to cart</Button>
        </div>
    );
};
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
