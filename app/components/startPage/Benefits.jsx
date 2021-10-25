import React from "react";
import benefitsStyles from "../../styles/benefits.module.css";

function Benefits() {
    return (
        <div className={benefitsStyles.cards}>
            <div>
                <div
                    style={{
                        fontSize: 20,
                        border: "none",
                        fontWeight: 700,
                        marginLeft: -10,
                        boxShadow: "none",
                        borderRadius: 0,
                    }}
                >
                    Проще
                </div>
                чем разбираться самому во всех моментах
            </div>
            <div>
                <div
                    style={{
                        fontSize: 20,
                        border: "none",
                        fontWeight: 700,
                        marginLeft: -10,
                        boxShadow: "none",
                        borderRadius: 0,
                    }}
                >
                    Качественнее
                </div>
                чем у фрилансеров, потому что мы делаем только сайты-визитки, и
                набрались опыта в данном деле
            </div>
            <div>
                <div
                    style={{
                        fontSize: 20,
                        border: "none",
                        fontWeight: 700,
                        marginLeft: -10,
                        boxShadow: "none",
                        borderRadius: 0,
                    }}
                >
                    Быстрее
                </div>
                чем заниматься самому
            </div>
            <div>
                <div
                    style={{
                        fontSize: 20,
                        border: "none",
                        fontWeight: 700,
                        marginLeft: -10,
                        boxShadow: "none",
                        borderRadius: 0,
                    }}
                >
                    Удобнее
                </div>
                необходимо лишь обсудить некоторые моменты, остальным займёмся
                мы
            </div>
        </div>
    );
}

export default Benefits;
