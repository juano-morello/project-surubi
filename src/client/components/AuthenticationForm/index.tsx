import {signIn, signOut, useSession} from "next-auth/react";

export default function AuthenticationForm() {
    const {data: session} = useSession()

    return (
        <>
            {session ? (
                <>
                    <p>Signed in as {session.user?.email}</p>
                    <br/>
                    <button onClick={() => signOut()}>Sign out</button>
                </>

            ) : (
                <>
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            )}
        </>
    );
}
