import { MainLayout } from "../../components/MainLayout";
import detailsStyles from "../../styles/details.module.css";
import DetailsCard from "./DetailsCard";

export default function OtherInfo() {
    return (
        <MainLayout title="Подробности">
            <div style={{ fontSize: 25, fontWeight: 900, marginBottom: 30 }}>
                Технологии
            </div>
            <div
                style={{
                    fontSize: 18,
                    width: 400,
                    textAlign: "center",
                    marginBottom: 30,
                }}
            >
                Мы используем один из лучших подходов к <b>быстрому</b> созданию{" "}
                <b>качественного</b> продукта
            </div>

            <div className={detailsStyles.list}>
                <DetailsCard
                    text="Next JS"
                    details="Next.js - это фреймворк, основанный на React, который позволяет создавать веб-приложения с улучшенной производительностью и улучшенным пользовательским опытом с помощью дополнительных функций предварительного рендеринга, таких как полноценный рендеринг на стороне сервера (SSR) и статическая генерация страниц (SSG)."
                />
                <DetailsCard
                    text="Bootstrap"
                    details="Bootstrap — это открытый и бесплатный HTML, CSS и JS фреймворк, который используется веб-разработчиками для быстрой вёрстки адаптивных дизайнов сайтов и веб-приложений."
                />
            </div>
        </MainLayout>
    );
}
