import homeStyles from "../styles/home.module.css";
import { MainLayout } from "../components/MainLayout";
import Link from "next/link";

export default function Home() {
    return (
        <MainLayout title="Cтартовая страница">
            <div className={homeStyles.exampleBCards}>
                <div>
                    <div
                        style={{
                            // marginBottom: 30,
                            // marginLeft: 60,
                            fontSize: "2.75rem",
                            width: 650,
                            // backgroundColor: "orange",
                        }}
                    >
                        Создание сайтов-визиток на заказ...
                    </div>
                    <div className={homeStyles.firstblock}>
                        <div
                            style={{
                                margin: "32px 0px",
                            }}
                        >
                            За 2000 рублей вы получаете:
                        </div>
                        <ul>
                            <li>Экономию времени и сил</li>
                            <li>Качество</li>
                        </ul>
                        <Link href="/order">
                            <a>
                                <button
                                    type="button"
                                    className="btn btn-dark mt-3"
                                >
                                    Заказать
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div
                    style={{
                        border: "1px solid black",
                        position: "relative",
                        // marginLeft: 50,
                    }}
                >
                    <img
                        src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok23-min.jpg"
                        onClick={() => alert("terry222")}
                    />
                    {/* <div style={{ textAlign: "center" }}>Сайт про гонки</div> */}
                </div>
                <div
                    style={{
                        border: "1px solid black",
                        position: "absolute",
                        marginTop: 150,
                        // marginRight: 50,
                        // zIndex: 10,
                        marginLeft: 730,
                    }}
                >
                    <img src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg" />
                </div>
            </div>
        </MainLayout>
    );
}
