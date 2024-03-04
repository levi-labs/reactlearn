import { useEffect, useState } from 'react';
import Button from '../components/Elements/Button';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product.service';

export default function Products() {
    const [cart, setCart] = useState([]);

    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts((res) => {
            setProducts(res);
        });
    }, []);

    // learn with local storage
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find(
                    (product) => product.id === item.id,
                );
                return acc + product.price * item.qty;
            }, 0);
            setTotal(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products]);

    const handleAddCart = (product) => {
        if (cart.find((item) => item.id === product.id)) {
            const listCart = cart.map((item) =>
                item.id === product.id
                    ? {
                          ...item,
                          qty: item.qty + 1,
                          price: item.price + product.price,
                      }
                    : item,
            );
            setCart(listCart);
        } else {
            const newCart = [...cart, { ...product, qty: 1 }];
            setCart(newCart);
        }
    };

    // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);
    // const handleCartRef = (product) => {
    //     cartRef.current = [...cartRef.current, product];
    //     localStorage.setItem('cart', JSON.stringify(cartRef.current));
    // };
    // const totalRef = useRef(null);

    // useEffect(() => {
    //     if (cart.length > 0) {
    //         totalRef.current.style.display = 'block';
    //     } else {
    //         totalRef.current.style.display = 'none';
    //     }
    // }, [cart]);
    return (
        <>
            <div className='flex justify-end h-20 bg-blue-500 text-white items-center px-10'>
                <p>example@gmail.com</p>
                <Button className='ml-5'>Logout</Button>
            </div>
            <div className='flex justify-center bg-blue-50 py-5'>
                <div className='w-3/4 flex flex-wrap'>
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body title={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer
                                    handleAddCart={handleAddCart}
                                    // handleAddCart={handleCartRef}
                                    id={product.id}
                                    prd={product}>
                                    {product.price}
                                </CardProduct.Footer>
                            </CardProduct>
                        ))}
                </div>
                <div className='w-1/4 max-h-96 rounded-lg p-4 bg-slate-50 shadow-lg'>
                    <h4 className='text-4xl'>Cart</h4>

                    <div className=' border-2 border-black m-2 '>
                        <div className='flex justify-between p-4'>
                            <div>
                                <p>Nama</p>
                                <ul>
                                    {cart.map((product) => (
                                        <li key={product.id}>
                                            {product.title.substring(0, 20)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p>Qty</p>
                                <ul>
                                    {products.length > 0 &&
                                        cart.map((product) => (
                                            <li key={product.id}>
                                                {product.qty}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div>
                                <p>SubTotal</p>
                                <ul>
                                    {products.length > 0 &&
                                        cart.map((product) => (
                                            <li key={product.id}>
                                                {product.price.toLocaleString(
                                                    'id-ID',
                                                    {
                                                        style: 'currency',
                                                        currency: 'IDR',
                                                    },
                                                )}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        // ref={totalRef}
                        className='flex justify-between m-2 p-4'>
                        <p>Total</p>
                        <p>
                            {total.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                            })}
                        </p>
                    </div>
                    <div className='px-5mb-2'>
                        <p className='text-center mx-2'>
                            <input
                                className='mx-1'
                                type='checkbox'
                                name=''
                                id=''
                            />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta, voluptates.
                        </p>
                    </div>

                    <div className='w-full px-8'>
                        <Button
                            classname='block w-full px-3 h-12'
                            type='button'>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
