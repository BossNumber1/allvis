import React from "react";

function FormSbor() {
    let submitHandler = (e) => {
        e.preventDefault();

        console.log("name =", name, "phone =", phone, "message =", message);
    };

    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");

    let nameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    let phoneChange = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    };
    let messageChange = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    return (
        <div className="ml-5 mr-5">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Имя
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={nameChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Телефон
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={phone}
                        onChange={phoneChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Сообщение
                    </label>
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
                >
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default FormSbor;
