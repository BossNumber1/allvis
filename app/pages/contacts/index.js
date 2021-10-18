import { MainLayout } from "../../components/MainLayout";
import contacts from "../../styles/contacts.module.css";
import Image from "next/image";
import vk from "../../public/vk.png";
import tg from "../../public/tg.png";

export default function Contacts() {
    return (
        <MainLayout title="Наши контакты">
            <div className={contacts.bodyPage}>
                <a href="https://vk.com/moyustimov">
                    <Image src={vk} width={64} height={64} />
                </a>
                <a href="https://t.me/moyustimov">
                    <Image src={tg} width={64} height={64} />
                </a>
            </div>
        </MainLayout>
    );
}
