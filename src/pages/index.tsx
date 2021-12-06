import Link from "next/link";
import {useSession} from "next-auth/react";
import UserBadge from "../client/components/UserBadge";
import LandingNavbar from "../client/components/LandingNavbar";

function Homepage() {
    const {data: session} = useSession()

    return (
        <>
            <div className="container">
                <LandingNavbar />

                <div className="row mt-4">
                    <h1 className={'text-center'}>Project Surubi</h1>
                    <h2 className={'text-center text-muted'}>We are a startup studio that helps local artists to get into the NFT wave, simple and easy</h2>
                </div>
            </div>
            {/*<h1>Project Surubi</h1>*/}
            {/*<UserBadge />*/}
            {/*{session ? (*/}
            {/*    <>*/}
            {/*        <Link href="/app">Go to dashboard</Link>*/}
            {/*    </>*/}
            {/*) : (*/}
            {/*    <>*/}
            {/*        <Link href="/get-started">Get started</Link>*/}
            {/*        <Link href="/login">Login</Link>*/}
            {/*    </>*/}

            {/*)}*/}
        </>
    );
}

export default Homepage;
