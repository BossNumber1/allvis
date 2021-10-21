import React from "react";
import successIcon from "../../public/success.png";
import Image from "next/image";

function FormSbor() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [danger, setDanger] = React.useState(false);
    const [disabledBtn, setDisabledBtn] = React.useState(false);

    let nameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        setDanger(false);
        setDisabledBtn(false);
    };

    let emailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setDanger(false);
        setDisabledBtn(false);
    };

    let messageChange = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
        setDanger(false);
        setDisabledBtn(false);
    };

    let submitHandler = (e) => {
        e.preventDefault();

        if (name !== "" && email !== "" && message !== "") {
            setSuccess("Заказ принят!");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setDisabledBtn(true);
            setDanger("Стоит заполнить все поля");
        }
    };

    return (
        <div className="ml-5 mr-5">
            <div className={danger && "alert alert-danger"}>{danger}</div>

            {!success ? (
                <form>
                    <div className="mb-3">
                        <label className="form-label">Имя</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={nameChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={emailChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Сообщение</label>
                        <textarea
                            className="form-control"
                            name="message"
                            value={message}
                            onChange={messageChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={submitHandler}
                        disabled={disabledBtn && "disabled"}
                    >
                        Отправить
                    </button>
                </form>
            ) : (
                <div className="mr-5">
                    <div>
                        <Image src={successIcon} width={100} height={100} />
                    </div>
                    <div style={{ fontWeight: 700 }}>{success}</div>
                </div>
            )}
        </div>
    );
}

export default FormSbor;
