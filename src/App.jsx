// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
    return (
        <>
            <div className='flex justify-center min-h-screen items-center bg-slate-200'>
                <LoginPage />
                {/* <RegisterPage /> */}
            </div>
        </>
    );
}

export default App;
