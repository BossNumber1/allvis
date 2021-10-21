import React from "react";
import Image from "next/image";

function IconBlock({ iconSrc, text }) {
    return (
        <div style={{ display: "flex" }}>
            <Image src={iconSrc} width={32} height={32} />{" "}
            <div
                style={{
                    marginTop: "1%",
                    marginLeft: 5,
                }}
            >
                {text}
            </div>
        </div>
    );
}

export default IconBlock;
