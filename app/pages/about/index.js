import { MainLayout } from "../../components/MainLayout";
import aboutStyles from "../../styles/about.module.css";
import Image from "next/image";
import profile from "../../public/profile.jpg";

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

                <div>
                    <h2>Немного обо мне</h2>
                </div>

                <div className={aboutStyles.info}>
                    <div>
                        <div>
                            <i>Фронтенд-программист.</i>
                        </div>
                        <div>
                            Программирую уже много лет, но активно начал
                            примерно 2 года назад.
                        </div>
                        <div>Живу, пока что, в Великом Новгороде.</div>
                        <div>
                            Занимаюсь свободным делом: на фрилансе и строю
                            потихоньку свой бизнес / свою компанию.
                        </div>
                        <div>
                            Если вам интересно, то программирую на React JS
                            (примерно 1,5 года), на JS (именно те 2 года).
                        </div>
                        <div>Раньше изучал ...</div>
                    </div>
                    <div className={aboutStyles.ava}>
                        <Image src={profile} width={200} height={300} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
