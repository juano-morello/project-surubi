import Link from "next/link";
import {useRouter} from "next/router";
import {signOut, useSession} from "next-auth/react";

const Dashboard = () => {
    const router = useRouter();
    const {data: session} = useSession()

    console.log('ON LOAD', session?.user?.email)
    if (session?.user?.email == undefined) {
        if (process.browser) router.push("/login");
        return (
            <p>
                Redirecting to <Link href="/login">/login</Link>
                ...
            </p>
        );
    }

    return (
        <>
            <h1>Hello {session?.user?.name}!</h1>
            {/*<ul>*/}
            {/*    /!*{data.currentUser.projects.map((project) => (*!/*/}
            {/*    /!*    <li key={project.slug}>*!/*/}
            {/*    /!*        <Link href={`/app/${project.slug}`}>{project.name}</Link>*!/*/}
            {/*    /!*    </li>*!/*/}
            {/*    /!*))}*!/*/}
            {/*</ul>*/}
            {/*<input*/}
            {/*    placeholder="Hooli Inc."*/}
            {/*    value={name}*/}
            {/*    onChange={(evt) => setName(evt.target.value)}*/}
            {/*/>*/}
            {/*<button*/}
            {/*    disabled={!name}*/}
            {/*    onClick={() => {*/}
            {/*        createProject({*/}
            {/*            name,*/}
            {/*        }).then((result) => {*/}
            {/*            const slug = result.data?.createProject?.slug;*/}
            {/*            if (slug) router.push(`/app/${slug}`);*/}
            {/*        });*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Create project*/}
            {/*</button>*/}
            <Link href="/app/settings">Settings</Link>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    );
}

export default Dashboard