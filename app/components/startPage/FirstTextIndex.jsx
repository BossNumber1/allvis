import React from "react";
import Link from "next/link";
import homeStyles from "../../styles/home.module.css";

function FirstTextIndex() {
    return (
        <div className={homeStyles.heroTextWrapper}>
            <div  
                className={homeStyles.heroTitle}
            >
                Создание сайтов-визиток на заказ...
            </div>
            <div className={homeStyles.firstblock}>
                <div
                    className={homeStyles.subTitle}
                    // style={{
                    //     margin: "32px 0px",
                    // }}
                >
                    За 3 дня и 3000 рублей вы получаете:
                </div>
                <ul>
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
