import React from "react";

function PictureIndex() {
    return (
        <>
            <div
                style={{
                    border: "1px solid black",
                    position: "relative",
                    // marginLeft: 50,
                }}
            >
                <img
                    src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok23-min.jpg"
                    onClick={() => alert("terry222")}
                />
                {/* <div style={{ textAlign: "center" }}>Сайт про гонки</div> */}
            </div>
            <div
                style={{
                    border: "1px solid black",
                    position: "absolute",
                    marginTop: 150,
                    // marginRight: 50,
                    // zIndex: 10,
                    marginLeft: 730,
                }}
            >
                <img src="https://impulse-design.com.ua/images/blog/primery-sajtov-vizitok/primery-sajtov-vizitok22-min.jpg" />
            </div>
        </>
    );
}

export default PictureIndex;
