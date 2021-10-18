import homeStyles from "../styles/home.module.css";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
    return (
        <MainLayout title="Cтартовая страница">
            <div style={{ marginBottom: 30 }}>
                Привет. Создаю сайты-визитки на заказ. Вот мои труды:
            </div>
            <div className={homeStyles.exampleBCards}>
                <div style={{ border: "1px solid black;" }}>
                    <div>
                        <a href="/#">
                            <img src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok23-min.jpg"></img>
                        </a>
                    </div>
                    <div style={{ textAlign: "center" }}>Сайт про гонки</div>
                </div>
                <div style={{ border: "1px solid black;" }}>
                    <div>
                        <a href="/#">
                            <img src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg"></img>
                        </a>
                    </div>
                    <div style={{ textAlign: "center" }}>Сайт про ранчо</div>
                </div>
            </div>
        </MainLayout>
    );
}
