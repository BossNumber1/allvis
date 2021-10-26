import { MainLayout } from "../../components/MainLayout";
import detailsStyles from "../../styles/details.module.css";
import DetailsCard from "./DetailsCard";

export default function OtherInfo() {
    let dataList = [
        {
            id: "0",
            text: "Next JS",
            details:
                "Next.js - это фреймворк, основанный на React, который позволяет создавать веб-приложения с улучшенной производительностью и улучшенным пользовательским опытом с помощью дополнительных функций предварительного рендеринга, таких как полноценный рендеринг на стороне сервера (SSR) и статическая генерация страниц (SSG).",
        },
        {
            id: "1",
            text: "Bootstrap",
            details:
                "Bootstrap — это открытый и бесплатный HTML, CSS и JS фреймворк, который используется веб-разработчиками для быстрой вёрстки адаптивных дизайнов сайтов и веб-приложений.",
        },
    ];

    return (
        <MainLayout title="Подробности">
            <div className={detailsStyles.bodyPage}>
                <div className={detailsStyles.title}>Технологии</div>
                <div className={detailsStyles.description}>
                    Мы используем один из лучших подходов к <b>быстрому</b>{" "}
                    созданию <b>качественного</b> продукта
                </div>
                <div className={detailsStyles.list}>
                    {dataList.map((el) => (
                        <DetailsCard
                            key={el.id}
                            text={el.text}
                            details={el.details}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
