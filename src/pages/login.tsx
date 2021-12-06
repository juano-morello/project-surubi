import AuthenticationForm from '../client/components/AuthenticationForm'
import {useSession} from 'next-auth/react'
import {router} from "next/client";
import Link from "next/link";

const Login = () => {
    const {data: session} = useSession()

    if (session?.user?.email != undefined) {
        return (
            <p>
                Go to <Link href="/app">Dashboard</Link>

            </p>
        );
    } else {
        return <>
            <h1>Welcome back!</h1>
            <AuthenticationForm/>
        </>
    }
}

export default Login
