import '../../../../../app/globals.css';
import Head from 'next/head';
import Navbar from '@/components/ui/navbar/Navbar';
import Login from '@/components/ui/login/Login';

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Airbnb Clone</title>
            </Head>
            <Navbar>

            </Navbar>
            <Login />
        </>
    )
}