import React from "react";
import Link from "next/link";
import homeStyles from "../../styles/home.module.css";
import PictureIndex from './PictureIndex';

function FirstTextIndex() {
    return (
        <div className={homeStyles.heroTextWrapper}>
            <div  
                className={homeStyles.heroTitle}
            >
                Создание сайтов-визиток на заказ...
            </div>
            <div className={homeStyles.heroMinWrapper}>
                <div className={homeStyles.heroMinInner}>
                    <img className={homeStyles.heroMinImg} src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg" alt="img" width="240" className={homeStyles.heroMinImg}/>
                </div>
                <div className={homeStyles.heroMinInner}>
                    <img className={homeStyles.heroMinImg} src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg" alt="img" width="240" className={homeStyles.heroMinImg}/>
                </div>
            </div>
            <div className={homeStyles.firstblock}>
                <div className={homeStyles.subTitle}>
                    За 3 дня и 3000 рублей вы получаете:
                </div>
                <ul className={homeStyles.heroBenefitsList}>
                    <li>Экономию времени и сил</li>
                    <li>Качество</li>
                </ul>
            </div>
                <Link href="/order">
                    <a>
                        <button type="button" className="btn btn-dark mt-3">
                            Заказать
                        </button>
                    </a>
                </Link>
        </div>
    );
}

export default FirstTextIndex;
