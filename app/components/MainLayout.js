import Head from "next/head";
import Header from "./general/Header";
import homeStyles from "../styles/Home.module.css";

export function MainLayout({ children, title }) {
    return (
        <>
            <Head>
            {/* <meta charset="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
                <title>{`Генератор сайтов-визиток | ${title}`}</title>
            </Head>
            <Header />
            <main className={homeStyles.main}>{children}</main>
        </>
    );
}
