import { MainLayout } from "../../components/MainLayout";
import contacts from "../../styles/contacts.module.css";
import Image from "next/image";
import vk from "../../public/vk.png";
import tg from "../../public/tg.png";
import phone from "../../public/phone.png";
import mail from "../../public/mail.png";
import FormSbor from "./FormSbor";
import IconBlock from "./IconBlock";

export default function Contacts() {
    return (
        <MainLayout title="Наши контакты">
            <div className={contacts.bodyPage}>
                <FormSbor />
                <div>
                    <div style={{ fontWeight: 700, fontSize: 20, width: 320 }}>
                        Здесь вы оставите заявку и наш менеджер с вами свяжется
                    </div>
                    <div>
                        Наши контакты:
                        <IconBlock iconSrc={phone} text="89506822950" />
                        <IconBlock iconSrc={mail} text="dimaang23@gmail.com" />
                        <IconBlock iconSrc={vk} text="ВКонтакте" />
                        <IconBlock iconSrc={tg} text="Телеграмм" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
