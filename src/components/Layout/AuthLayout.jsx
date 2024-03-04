export default function AuthLayout(props) {
    const { title, children } = props;
    return (
        <div className='flex justify-center min-h-screen items-center bg-slate-200'>
            <div className='bg-white w-1/4 p-5 rounded-xl shadow-xl'>
                <div className='w-full max-w-md'>
                    <h1 className='text-3xl font-bold mb-2 text-blue-600'>
                        {title}
                    </h1>
                    <p className='font-medium text-slate-500'>
                        Welcome, please enter your details
                    </p>
                    {children}
                </div>
            </div>
        </div>
    );
}
