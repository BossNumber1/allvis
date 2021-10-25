import React from "react";

function DetailsCard({ text }) {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ border: "none", margin: 0 }}>{text}</div>
            <div
                style={{
                    border: "none",
                    textAlign: "right",
                    margin: 0,
                }}
            >
                <img
                    src="/down.png"
                    alt="icon down"
                    onClick={() => alert("terry222")}
                />
            </div>
        </div>
    );
}

export default DetailsCard;
