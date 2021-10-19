import Head from "next/head";
import Header from "./general/Header";
import homeStyles from "../styles/Home.module.css";

export function MainLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`Генератор сайтов-визиток | ${title}`}</title>
            </Head>
            <Header />
            <main className={homeStyles.main}>{children}</main>
        </>
    );
}
