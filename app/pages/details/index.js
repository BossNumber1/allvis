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
                <DetailsCard text="Next JS" />
                <DetailsCard text="Bootstrap" />
            </div>
        </MainLayout>
    );
}
