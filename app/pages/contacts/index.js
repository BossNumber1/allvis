import { MainLayout } from "../../components/MainLayout";
import contacts from "../../styles/contacts.module.css";

export default function Contacts() {
    return (
        <MainLayout title="Наши контакты">
            <div className={contacts.bodyPage}>
                <div>Привет :) Меня зовут Дмитрий. И мои контакты</div>
                <div style={{ display: "flex" }}>
                    <div style={{ margin: "0px 25px 0px 90px" }}>
                        <a href="https://vk.com/moyustimov">ВКонтакте</a>
                    </div>
                    <div>
                        <a href="https://t.me/moyustimov">Телеграмм</a>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
