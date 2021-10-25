import homeStyles from "../styles/home.module.css";
import { MainLayout } from "../components/MainLayout";
import PictureIndex from "../components/startPage/PictureIndex";
import FirstTextIndex from "../components/startPage/FirstTextIndex";
import Benefits from "../components/startPage/Benefits";

export default function Home() {
    return (
        <MainLayout title="Cтартовая страница">
            <div className={homeStyles.exampleBCards}>
                <FirstTextIndex />
                <PictureIndex />
            </div>
            <Benefits />
        </MainLayout>
    );
}
