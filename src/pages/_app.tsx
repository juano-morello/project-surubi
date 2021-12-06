import {Toaster} from 'react-hot-toast'
import type {AppProps} from 'next/app'
import {Provider} from 'urql'
import {client} from '../client/graphql/client'
import {SessionProvider} from 'next-auth/react'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import '../client/stylesheets/main.css'
import {useEffect} from "react";

function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap.min');
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SessionProvider
                session={pageProps.session}
            >
                <Provider value={client}>
                    <Component {...pageProps} />
                    <Toaster/>
                </Provider>
            </SessionProvider>
        </>

    );
}

export default App;
