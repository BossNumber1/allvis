import React from "react";

function DetailsCard({ text, details }) {
    const [isShow, setShow] = React.useState(false);

    return (
        <>
            {!isShow ? (
                <>
                    <div
                        style={{ display: "flex" }}
                        onClick={() => setShow(!isShow)}
                    >
                        <div style={{ border: "none", margin: 0 }}>{text}</div>
                        <div
                            style={{
                                border: "none",
                                textAlign: "right",
                                margin: 0,
                            }}
                        >
                            <img
                                src={!isShow ? "/down.png" : "/up.png"}
                                alt="icon down"
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div style={{ border: "none", margin: 0, padding: 0 }}>
                    <div
                        style={{ display: "flex" }}
                        onClick={() => setShow(!isShow)}
                    >
                        <div style={{ border: "none", margin: 0 }}>{text}</div>
                        <div
                            style={{
                                border: "none",
                                textAlign: "right",
                                margin: 0,
                            }}
                        >
                            <img
                                src={!isShow ? "/down.png" : "/up.png"}
                                alt={!isShow ? "icon down" : "icon up"}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "rgb(245, 227, 196)",
                            fontSize: 13,
                            padding: 10,
                        }}
                    >
                        {details}
                    </div>
                </div>
            )}
        </>
    );
}

export default DetailsCard;
