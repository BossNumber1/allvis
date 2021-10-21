import React from "react";
import Image from "next/image";

function IconBlock({ iconSrc, text = "", path = "", pathUser = "" }) {
    return (
        <div style={{ display: "flex", marginBottom: 5 }}>
            <Image src={iconSrc} width={32} height={32} />{" "}
            <div
                style={{
                    marginTop: "1%",
                    marginLeft: 5,
                }}
            >
                {text !== "" ? text : <a href={`${path}`}>{pathUser}</a>}
            </div>
        </div>
    );
}

export default IconBlock;
