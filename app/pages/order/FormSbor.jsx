import React from "react";

function FormSbor() {
    return (
        <div className="ml-5 mr-5">
            <form>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Имя"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Телефон"
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Сообщение"
                    />
                </div>
                <button type="submit" className="btn btn-dark">
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default FormSbor;
