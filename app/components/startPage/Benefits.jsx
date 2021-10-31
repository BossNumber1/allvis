import React from "react";
import benefitsStyles from "../../styles/benefits.module.css";

function Benefits() {
    return (
        <div className={benefitsStyles.benefits}>
            <div className={benefitsStyles.benefitsWrapper}>
                <div className={benefitsStyles.benfitsTitle}>
                    Проще
                </div>
                чем разбираться самому во всех моментах
            </div>
            <div className={benefitsStyles.benefitsWrapper}>
                <div className={benefitsStyles.benfitsTitle}>
                    Качественнее
                </div>
                чем у фрилансеров, потому что мы делаем только сайты-визитки, и
                набрались опыта в данном деле
            </div>
            <div className={benefitsStyles.benefitsWrapper}>
                <div className={benefitsStyles.benfitsTitle}>
                    Быстрее
                </div>
                чем заниматься самому
            </div>
            <div className={benefitsStyles.benefitsWrapper}>
                <div className={benefitsStyles.benfitsTitle}>
                    Удобнее
                </div>
                необходимо лишь обсудить некоторые моменты, остальным займёмся
                мы
            </div>
        </div>
    );
}

export default Benefits;
