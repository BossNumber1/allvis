import Head from "next/head";
import styles from "../styles/Home.module.css";
import headerStyles from "../styles/header.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Генератор сайтов-визиток</title>
                <meta
                    name="description"
                    content="Создание сайтов-визиток на заказ"
                />
            </Head>
            <div className={headerStyles.commonBlock}>
                <div>Ustinov Corp.</div>
                <div className={headerStyles.rightBlock}>
                    <div>
                        <a href="/#">About</a>
                    </div>
                    <div>
                        <a href="/#">Contacts</a>
                    </div>
                    <div>
                        <a href="/#">Other info</a>
                    </div>
                </div>
            </div>
            <main className={styles.main}>
                <div style={{ marginBottom: 30 }}>
                    Привет. Создаю сайты-визитки на заказ. Вот мои труды:
                </div>
                <div className={headerStyles.exampleBCards}>
                    <div style={{ border: "1px solid black;" }}>
                        <div>
                            <a href="/#">
                                <img src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok23-min.jpg"></img>
                            </a>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            Сайт про гонки
                        </div>
                    </div>
                    <div style={{ border: "1px solid black;" }}>
                        <div>
                            <a href="/#">
                                <img src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg"></img>
                            </a>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            Сайт про ранчо
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
