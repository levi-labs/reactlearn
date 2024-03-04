import { Link } from 'react-router-dom';
import Button from '../Elements/Button';
import InputForm from '../Elements/InputForm';

const FormRegister = () => {
    return (
        <div className='mt-2 w-full p-4'>
            <form action=''>
                <div className='mb-6'>
                    <InputForm
                        type='text'
                        name='fullname'
                        forHtml='fullname'
                        placeHolder='john doe'
                        label='Fullname'
                        id='fullname'
                    />
                    <InputForm
                        type='text'
                        name='email'
                        forHtml='email'
                        placeHolder='example@email.com'
                        label='Email'
                        id='email'
                    />
                    <InputForm
                        type='password'
                        name='password'
                        forHtml='password'
                        placeHolder='password'
                        label='Password'
                        id='password'
                    />
                    <InputForm
                        type='password'
                        name='confirmPassword'
                        forHtml='confirmPassword'
                        placeHolder='confirm password'
                        label='Confirm Password'
                        id='confirmPassword'
                    />
                </div>

                <div className='flex items-center justify-end w-full'>
                    <Button classname='w-full' type='submit'>
                        Register
                    </Button>
                </div>
                <div className='mt-4 text-slate-300 text-sm text-center hover:text-blue-400'>
                    <Link className=' border-b-2 w-2/3 text-center' to='/login'>
                        already have an account&nbsp;? Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default FormRegister;
