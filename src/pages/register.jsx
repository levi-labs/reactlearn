import React from 'react';
import AuthLayout from '../components/Layout/AuthLayout';
import FormRegister from '../components/Fragments/FormRegister';

export default function RegisterPage() {
    return (
        <AuthLayout title='Register'>
            <FormRegister />
        </AuthLayout>
    );
}
