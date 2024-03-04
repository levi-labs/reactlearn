import { useRouteError } from 'react-router-dom';
import '../assets/css/style.css';
import ImageError from '../assets/404-error.svg';
export default function NotFound() {
    const error = useRouteError();
    return (
        <>
            <div className='relative'>
                <div className='flex justify-center min-h-screen items-center '>
                    <img className='w-3/4 sm:w-1/4' src={ImageError} alt='' />
                </div>
                <div className='absolute bottom-[22%] left-1/2 transform translate-x-[-50%]'>
                    <h4 className='text-center font-bold text-md sm:inline-block sm:font-bold sm:text-2xl sm:text-center'>
                        Oops!&nbsp;
                    </h4>
                    <q className='inline-block text-lg sm:text-md'>
                        Sorry, an unexpected error has occurred.
                    </q>
                    <p className='text-center font-bold sm:text-2xl'>
                        {error.statusText || error.message}
                    </p>
                </div>
            </div>
        </>
    );
}
