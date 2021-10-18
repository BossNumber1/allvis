import Head from "next/head";
import Header from "./general/Header";
import homeStyles from "../styles/Home.module.css";

export function MainLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`Генератор сайтов-визиток | ${title}`}</title>
                <meta
                    name="keywords"
                    content="для всей семьи, в кругу друзей, write, people, развлечение"
                />
                <meta
                    name="description"
                    content="Создание сайтов-визиток на заказ"
                />
            </Head>
            <Header />
            <main className={homeStyles.main}>{children}</main>
        </>
    );
}
