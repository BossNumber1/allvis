import { MainLayout } from "../../components/MainLayout";
import aboutStyles from "../../styles/about.module.css";

export default function About() {
    return (
        <MainLayout title="Cтраница о нас">
            <div className={aboutStyles.bodyPage}>
                <div>
                    Я основал компанию Ustinov Corp. 14 октября 2021 года на
                    самозанятое лицо, в данный момент. Возможно стану
                    расширяться...
                </div>
                <div>Меня зовут Устинов Дмитрий Сергеевич.</div>
                <div>Реквизиты...</div>
            </div>
        </MainLayout>
    );
}
