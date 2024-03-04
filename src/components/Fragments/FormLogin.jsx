import InputForm from '../Elements/InputForm';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { login } from '../../services/auth.service';

const FormLogin = () => {
    const [errorLogin, setErrorLogin] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res);
                const stats = (errorLogin[0]['status'] = true);
                setErrorLogin([
                    {
                        status: stats,
                        message: `Please check your email and verify your account`,
                    },
                ]);
                console.log(errorLogin[0]['status']);
            } else {
                console.log(res);
                const stats = (errorLogin[0]['status'] = false);
                setErrorLogin([
                    {
                        status: stats,
                        message: res,
                    },
                ]);
                console.log(errorLogin[0]['status']);
            }

            // console.log(res);
        });
    };
    const userRef = useRef(null);

    useEffect(() => {
        userRef.current.focus();
    }, []);
    return (
        <div className='mt-2 w-full p-4'>
            {errorLogin.length > 0 && errorLogin[0]['status'] == false && (
                <div className='align-center text-center bg-red-200 p-4'>
                    <span className='text-sm font-bold mb-2 text-red-600'>
                        {errorLogin[0]['message']}
                    </span>
                </div>
            )}

            {errorLogin.length > 0 && errorLogin[0]['status'] == true && (
                <div className='font-bold text-center bg-blue-400/50 p-4'>
                    <span className='text-sm font-bold mb-2 text-black'>
                        {errorLogin[0]['message']}
                    </span>
                </div>
            )}

            <form onSubmit={handleClick} className='mb-2'>
                <div className='mb-2'>
                    <InputForm
                        type='text'
                        name='username'
                        forHtml='username'
                        placeHolder='example@email.com'
                        label='Username'
                        id='username'
                        ref={userRef}
                    />
                    <InputForm
                        type='password'
                        name='password'
                        forHtml='password'
                        placeHolder='password'
                        label='Password'
                        id='password'
                    />
                </div>
                <div className='flex items-center justify-end'>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
            <div className='mt-7 text-slate-300 text-sm text-center hover:text-blue-400'>
                <Link className=' border-b-2 w-2/3 text-center' to='/register'>
                    dont have an account&nbsp;? Sign Up
                </Link>
            </div>
            <div className='mt-2 text-slate-300 text-sm text-center hover:text-blue-400'>
                <a className='text-center' href=''>
                    Forgot Password
                </a>
            </div>
        </div>
    );
};
export default FormLogin;
