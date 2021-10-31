import React from "react";
import styles from "./../../styles/Home.module.css"
function PictureIndex() {
    return (
        <div className={styles.heroImWrapper}>
            <div
                className={styles.heroImgContainer  + " " + styles.heroImgContainerFirst}
            >
                <img
                    className={styles.heroImg}
                    src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok23-min.jpg"
                    onClick={() => alert("terry222")}
                />
                {/* <div style={{ textAlign: "center" }}>Сайт про гонки</div> */}
            </div>
            <div
                className={styles.heroImgContainer  + " " + styles.heroImgContainerSecond}
            >
                <img
                className={styles.heroImg}
                src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg" />
            </div>
        </div>
    );
}
// function PictureIndex() {
//     return (
//         <>
//             <div
//                 style={{
//                     border: "1px solid black",
//                     position: "relative",
//                     // marginLeft: 50,
//                 }}
//             >
//                 <img
//                     src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok23-min.jpg"
//                     onClick={() => alert("terry222")}
//                 />
//                 {/* <div style={{ textAlign: "center" }}>Сайт про гонки</div> */}
//             </div>
//             <div
//                 style={{
//                     border: "1px solid black",
//                     position: "absolute",
//                     marginTop: 150,
//                     // marginRight: 50,
//                     // zIndex: 10,
//                     marginLeft: 730,
//                 }}
//             >
//                 <img src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg" />
//             </div>
//         </>
//     );
// }

export default PictureIndex;
